import express from "express";
const router = express.Router();
import resetPasswordController from "../controllers/resetPassword.js";

router.post("/resetpassword", resetPasswordController);

export { router as resetPasswordRouter };