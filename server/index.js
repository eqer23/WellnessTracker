import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userLoginRouter } from "./routes/login.js";
import { userRegisterRouter } from "./routes/registration.js";
import { forgotPasswordRouter } from "./routes/forgotPassword.js";

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);
app.use(cookieParser());
dotenv.config();
app.use("/", userLoginRouter);
app.use("/", userRegisterRouter);
app.use("/", forgotPasswordRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
