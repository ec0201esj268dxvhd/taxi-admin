import express from "express";
import { signup } from "../controller/user.js";

const user = express.Router();

user.get('/', (req, res) => {
    res.send("user are live")
})


// Post request
user.post('/signup', signup);


export default user