const UsersServices = require("../services/user.services");

const getUserConversations = async (req, res, next) => {
  try {
    const { username } = req.params;
    const userConversations = await UsersServices.getUserConversations(username)
    res.json(userConversations);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UsersServices.getAll()
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    await UsersServices.create(newUser);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res) => {
  try {
    // necesitamos el id del usuario
    const { id } = req.params;
    // la información a actualizar
    const { name, lastname } = req.body;
    // tengo que ir al modelo para consultar la informacion
    await UsersServices.update(id, { name, lastname });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser,
  updateUser,
  getAllUsers,
  getUserConversations
};
