export interface IMessage {
    id: string;
    message: string;
    author: string;
    datetime: string;
}

export interface IMessageWithoutIdAndDate {
    message: string;
    author: string;
}