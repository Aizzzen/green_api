import {ChatItem, msgSend} from "../types";

export interface receiveAndDeleteParams {
    id: string;
    token: string;
    chats: ChatItem[];
    setChats: (value: ChatItem[]) => void;
}

export const whatsAppApi = {
    async isAuthorized(id: string, token: string) {
        return await fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                return res
            })
    },
    async sendMessage(id: string, token: string, msg: msgSend) {
        await fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(msg)
        })
    },
    async receiveAndDelete({id, token, chats, setChats}: receiveAndDeleteParams) {
        let receiptId: number = 0
        if(id !== null && token !== null) {
            await fetch(`https://api.green-api.com/waInstance${id}/receiveNotification/${token}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => {
                    if(res !== null) {
                        receiptId = res.receiptId
                        if(
                            res.body.typeWebhook === "incomingMessageReceived" &&
                            res.body.messageData.typeMessage === "textMessage"
                        ) {
                            chats.forEach((item: ChatItem) => {
                                if(res.body.senderData.chatId === item.chatId) {
                                    item.msg.push({
                                        text: res.body.messageData.textMessageData.textMessage,
                                        stamp: res.body.timestamp,
                                        senderId: res.body.senderData.sender,
                                    })
                                }
                            });
                            setChats([...chats])
                            if(!localStorage.getItem("phone_number")) {
                                localStorage.setItem("phone_number", res.body.instanceData.wid)
                            }
                        }
                    }
                })
            await fetch(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${receiptId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                // .then(console.log)
        }
    },
    // async receiveNotification(id: string, token: string) {
    //     return await fetch(`https://api.green-api.com/waInstance${id}/receiveNotification/${token}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log("from api receive")
    //             return res
    //         })
    // },
    // async deleteNotification(id: string, token: string, receiptId: number) {
    //     return await fetch(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${receiptId}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log("from api delete")
    //             return res
    //         })
    // },
}