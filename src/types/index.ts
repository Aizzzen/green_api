export type msgSend = {
    chatId: string;
    message: string;
}

export type msgState = {
    senderId: string;
    stamp: any;
    text: string;
}

export type ChatItem = {
    id: number;
    chatId: string;
    msg: msgState[];
}