const mongoose = require("mongoose")

const dbConnect = () => {
    const connectionParams = {useNewUrlParse: true};
    mongoose.connect("mongodb+srv://instafit:instafit@cluster0.bydtuu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", connectionParams);

    mongoose.connection.on("connected", () => {
        console.log("connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.log("Error while connecting to database:" + err);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("Mongodb connection disconnected");
    });
    
};

module.exports = dbConnect;