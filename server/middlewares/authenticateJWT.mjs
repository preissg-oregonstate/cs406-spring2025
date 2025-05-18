import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  // Check cookie for a token
  const token = req.cookies.token;

  // If no token is found
  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied, no token provided" });
  }

  // If token is found, verify it
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

export default authenticateJWT;
