const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { authRouter } = require("./routes/auth.js");
// const test = require("./seed.js");

const { searchUsersRouter } = require("./routes/searchUsers.js");
const { uploadRouter } = require("./routes/uploadContent.js");
const { mealRouter } = require("./routes/mealTracker.js");

// adding mongodb stuff from video:
const { MongoClient } = require("mongodb");
const { dataRouter } = require("./routes/data.js");
const { chatRouter } = require("./routes/chat.js");
const { calendarRouter } = require("./routes/calendar.js");
const url = "mongodb://localhost:27017";
const databaseName = "wellnesstracker";
const client = new MongoClient(url);
const socket = require("socket.io");

// async function dbConnect() {
// let result = await client.connect();
// db = result.db(databaseName);
// return db.collection("users");
// let data = await collection.find({}).toArray();
// console.log(data);
// }

// module.exports= dbConnect; // only if we put the mongo stuff above into a seprate file

// console.log(dbConnection());

// dbConnection().then((resp) => {
//     resp.find() //if the fint () I can add {} and say username:'blah' to get all docunments with blah of username
//         .toArray()
//         .then((data) => {
//             console.log(data);
//         });
// });

// const dbConnect=require('./mongodb'); // only if above is in a different file

// another way to do what we did above:
// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray(); // can add {} to find () as above ^^^
//     console.log(data);
// };

// main();

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
app.use("/", authRouter);
app.use("/", dataRouter);
app.use("/api/chat/", chatRouter);
app.use("/", calendarRouter);
app.use("/", searchUsersRouter);
app.use("/", uploadRouter);
app.use("/", mealRouter);

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const io = socket(server, {
    cors: {
        origin: true,
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data.message);
        }
    });
});
