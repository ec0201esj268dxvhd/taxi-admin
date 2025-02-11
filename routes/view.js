import express from "express";

const view = express.Router();

view.get('/test', (req,res) => {
    res.send("view is live");
});

view.get('/');

export default view;