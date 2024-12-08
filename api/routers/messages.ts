import express from "express";
import {IMessageWithoutIdAndDate} from "../types";
import fileDb from "../fileDb";

const messagesRouter = express.Router();

messagesRouter.post('/', async (req, res) => {

    const message: IMessageWithoutIdAndDate = {
        message: req.body.message,
        author: req.body.author,
    }

    if (!req.body.message || !req.body.author) {
        res.status(400).send({error: 'Author and message must be present in the request'});
    }

    const savedMessage = await fileDb.addMessages(message);

    res.send(savedMessage);
});

export default messagesRouter;