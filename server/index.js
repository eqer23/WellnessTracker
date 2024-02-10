import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { userLoginRouter } from "./routes/login.js";
import { userRegisterRouter } from "./routes/registration.js";

const app = express();
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/', userLoginRouter)
app.use('/',userRegisterRouter)

app.listen(process.env.PORT, () => {
    console.log("Server is running");
})