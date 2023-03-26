const ConversationServices = require("../services/conversations.services");

const createCoupleConversation = async (req, res, next) => {
    try {
        const newConversation = req.body;
        const conversation = await ConversationServices.createCouple(newConversation);
        res.status(201).json(conversation);
    } catch (error) {
        next(error);
    }
};

const createGroupConversation = async (req, res, next) => {
    try {
        const newConversation = req.body;
        const conversation = await ConversationServices.createGroup(newConversation);
        res.status(201).json(conversation);
    } catch (error) {
        next(error);
    }
};

const getConversation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const conversation = await ConversationServices.getConversation(id);
        res.json(conversation);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCoupleConversation,
    createGroupConversation,
    getConversation
};
