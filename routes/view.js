import express from "express";

const view = express.Router();

view.get('/test', (req,res) => {
    res.send("view is live");
});

view.get('/', (req, res) => {
    res.render('index');
});

export default view;