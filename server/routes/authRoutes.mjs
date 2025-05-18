import express from "express";
import {
  registerUser,
  loginUser,
  authenticateUser,
  logoutUser,
} from "../controllers/authController.mjs";
import authenticateJWT from "../middlewares/authenticateJWT.mjs";
const router = express.Router();

// Register a new user
router.post("/register-user", registerUser);

// Log user in
router.post("/login", loginUser);

// Log user out
router.post("/logout", logoutUser);

// Authenticate the user
router.get("/me", authenticateJWT, authenticateUser);

export default router;
