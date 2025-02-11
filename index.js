import express from "express";
import { configDotenv } from "dotenv";
import user from "./routes/user.js";
import view from "./routes/view.js";
import db from "./config/mongodb.js";

db;
configDotenv();

const app = express();

const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use('/', view);
app.use('/user', user);


app.listen(port, () => {
    console.log("Server is live");
})