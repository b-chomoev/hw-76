import express from "express";
import {IMessageWithoutIdAndDate} from "../types";
import fileDb from "../fileDb";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
    const queryDate = req.query.datetime as string;
    const date = new Date(queryDate);

    if (queryDate !== undefined) {
        if (isNaN(date.getDate())) {
            res.status(400).send({error: 'Invalid date'});
        }

        const messages = await fileDb.getMessages();

        const filteredMessages = messages.filter((message) => {
            return message.datetime > queryDate;
        });

        res.send(filteredMessages);
    } else {
        const messages = await fileDb.getMessages();
        res.send(messages.slice(-30).reverse());
    }
})

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