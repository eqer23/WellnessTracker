import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { userLoginRouter } from "./routes/login.js";
import { userRegisterRouter } from "./routes/registration.js";

const app = express();
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', userLoginRouter)
app.use('/auth',userRegisterRouter)

app.listen(process.env.PORT, () => {
    console.log("server is running");
})