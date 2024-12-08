import {promises as fs} from 'fs';
import {IMessage, IMessageWithoutIdAndDate} from "./types";

const fileName = './db.json';
let data: IMessage[] = [];

const fileDb = {
    async init() {

    },
    async getMessages() {
        return data;
    },
    async addMessages(message: IMessageWithoutIdAndDate) {
        const id = crypto.randomUUID();
        const datetime = new Date().toISOString();
        const finalMessage = {id, datetime, ...message};
        data.push(finalMessage);
        await this.save();
        return finalMessage;
    },
    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;