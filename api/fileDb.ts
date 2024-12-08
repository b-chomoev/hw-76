import {promises as fs} from 'fs';
import {IMessage, IMessageWithoutIdAndDate} from "./types";
import {deflateRawSync} from "node:zlib";

const fileName = './db.json';
let data: IMessage[] = [];

const fileDb = {
    async init() {
        try {
            const fileContent = await fs.readFile(fileName);
            data = JSON.parse(fileContent.toString()) as IMessage[];
        } catch (err) {
            console.log(err);
        }
    },
    async getMessages() {
        return data;
    },
    async addMessages(message: IMessageWithoutIdAndDate) {
        const id = crypto.randomUUID();
        const datetime = new Date().toISOString();
        const finalMessage = {id, ...message, datetime,};
        data.push(finalMessage);
        await this.save();
        return finalMessage;
    },
    async save() {
        return fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;