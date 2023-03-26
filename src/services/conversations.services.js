const Conversations = require("../models/conversations.models");
const Participants = require("../models/participants.models");
const Messages = require("../models/messages.models");

class ConversationServices {
  static async createCouple(newConversation) {
    try {
      const conversation = {
        title: newConversation.title,
        type: 1
      }
      const conversationCreated = await Conversations.create(conversation);
      const newParticipation = {
        id_conversation: conversationCreated.id,
        username: newConversation.username
      }
      const participateIn = await Participants.create(newParticipation);
      const response = {
        id: conversationCreated.id,
      }
      return response;
    } catch (error) {
      throw error;
    }
  };

  static async createGroup(newConversation) {
    try {
      const conversation = {
        title: newConversation.title,
        type: 2
      }
      const conversationCreated = await Conversations.create(conversation);
      const newParticipation = {
        id_conversation: conversationCreated.id,
        username: newConversation.username
      }
      const participateIn = await Participants.create(newParticipation);
      const response  = {
        id: conversationCreated.id
      }
      return response;
    } catch (error) {
      throw error;
    }
  };

  static async getConversation(id) {
    try {
      const conversation = await Conversations.findAll({
        where: { id },
        include: [
          {
            model: Participants
          },
          {
            model: Messages
          }
        ]
      }

      )
      console.log(conversation);
      return conversation;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ConversationServices;