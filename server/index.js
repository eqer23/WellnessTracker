const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { authRouter } = require("./routes/auth.js");


// adding mongodb stuff from video:
const { MongoClient } = require("mongodb");
const { dataRouter } = require("./routes/data.js");
const url = "mongodb://localhost:27017";
const databaseName = "wellnesstracker";
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection("users");
    // let data = await collection.find({}).toArray();
    // console.log(data);
}

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
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray(); // can add {} to find () as above ^^^
    console.log(data);
};

main();

const app = express();
// <<<<<<< UserLogin_TimDev
app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/', authRouter)
app.use('/', dataRouter)

// =======
// app.use(express.json());
// app.use(
//     cors({
//         origin: true,
//         credentials: true,
//     })
// );
// app.use(cookieParser());
// dotenv.config();
// app.use("/", userLoginRouter);
// app.use("/", userRegisterRouter);
// >>>>>>> sierraBackEnd

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
