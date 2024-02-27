const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { userLoginRouter } = require("./routes/login.js");
const { userRegisterRouter } = require("./routes/registration.js");
const { forgotPasswordRouter } = require("./routes/forgotPassword.js");


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
