import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

mongoose.connect(process.env.MONGODBURL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to mongodb"));

db.once('open',() => {
    console.log("Connected to mongodb")
})

export default db;