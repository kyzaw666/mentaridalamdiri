import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
const location = useLocation();
const {
    messages,
    sendMessage,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
const { authUser } = useAuthStore();
const messageEndRef = useRef(null);
const [hasProcessedMessage, setHasProcessedMessage] = useState(false);

useEffect(() => {
    const sendInitialMessage = async () => {
      const messageKey = `afirmasi_sent_${location.state?.timestamp}`;
      
      if (
        location.state?.initialMessage && 
        location.state?.afirmasiResponses?.length === 3 && 
        selectedUser?._id &&
        !localStorage.getItem(messageKey) &&
        !hasProcessedMessage
      ) {
        try {
          localStorage.setItem(messageKey, 'true');
          setHasProcessedMessage(true);
          
          await sendMessage({ text: location.state.initialMessage }, selectedUser._id);
        } catch (error) {
          localStorage.removeItem(messageKey);
          setHasProcessedMessage(false);
          console.error("Error sending affirmation message:", error);
        }
      }
    };
    
    sendInitialMessage();
  }, [location.state, selectedUser?._id, hasProcessedMessage]);

  // Get messages and subscribe to updates
  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
      subscribeToMessages();
    }

    return () => unsubscribeFromMessages();
  }, [selectedUser?._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!selectedUser) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <p className="text-base-content/70">Pilih pengguna untuk memulai chat</p>
      </div>
    );
  }

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            ref={messageEndRef}
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};
export default ChatContainer;
