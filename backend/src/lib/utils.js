import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "none",
    secure: true,
    path: "/",
  };

  // Only set domain in production
  if (process.env.NODE_ENV === "production") {
    cookieOptions.domain = ".railway.app";
  }

  res.cookie("jwt", token, cookieOptions);
  return token;
};
