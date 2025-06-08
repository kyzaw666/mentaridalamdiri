export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    return;
  }

  if (Notification.permission !== "granted") {
    await Notification.requestPermission();
  }
};

export const showNotification = (title, body) => {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  const notification = new Notification(title, {
    body,
    icon: "/avatar.png",
  });

  notification.onclick = () => {
    window.focus();
    notification.close();
  };
};