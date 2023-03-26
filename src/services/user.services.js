const Conversations = require("../models/conversations.models");
const Participants = require("../models/participants.models");
const Users = require("../models/user.models");

class UsersServices {


  static async getUserConversations(username) {
    try {
      const users = await Users.findAll({
        where: { username },
        attributes: [],
        include: [
          {
            model: Participants,
            include: [
              {
                model: Conversations,
              },
            ]
          }
        ]
      }
      );
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const users = await Users.findAll({
        attributes: ["firstname", "lastname", "username", "email"]
      }
      );
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(email) {
    try {
      // SELECT * FROM users where email = email
      const user = await Users.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      const userCreated = await Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updateUserData) {
    try {
      const updatedUser = await Users.update(updateUserData, {
        where: { id },
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
