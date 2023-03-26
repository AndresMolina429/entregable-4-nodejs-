const MessagesServices = require("../services/messages.services");

const createMessage = async (req, res, next) => {
    try {
        const newMessage = req.body
        const createdMessage = await MessagesServices.createMessage(newMessage)
        res.status(201).json(createdMessage)
    } catch (error) {
        next(error);
    }
};

module.exports = { createMessage };