import express from "express";
const router = express.Router();
import {forgotPasswordController, resetPasswordController} from '../controllers/forgotPassword.js'
import bcrypt from 'bcrypt'
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
let salt = 10;
 
router.post("/forgot-password", forgotPasswordController);
 
// this updates database.
router.post("/reset-password/:token", resetPasswordController);
 
 
export { router as forgotPasswordRouter }