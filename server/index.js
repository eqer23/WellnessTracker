const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { authRouter } = require("./routes/auth.js");

// adding mongodb stuff from video:
const { MongoClient } = require("mongodb");
const { dataRouter } = require("./routes/data.js");
const url =
  "mongodb+srv://instafit:instafit@cluster0.bydtuu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://instafit-frontend.onrender.com"
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://instafit-frontend.onrender.com'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

app.use(cookieParser());
dotenv.config();
app.use("/", authRouter);
app.use("/", dataRouter);

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
