const Messages = require("../models/messages.models")

class MessagesServices {
    static async createMessage(newMessage){
        try {
            const messageCreated = await Messages.create(newMessage)
            const response = {
                id_message: messageCreated.id
            }
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MessagesServices;