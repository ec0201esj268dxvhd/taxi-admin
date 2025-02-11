import express from "express";
import { configDotenv } from "dotenv";
import user from "./routes/user.js";
import view from "./routes/view.js";
import db from "./config/mongodb.js";
import path from "path";
import { fileURLToPath } from "url";
db;
configDotenv();

const app = express();

const port = process.env.PORT;

app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended : true }))
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

app.use('/', view);
app.use('/user', user);


app.listen(port, () => {
    console.log("Server is live");
})