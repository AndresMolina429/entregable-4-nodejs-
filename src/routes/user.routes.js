const { Router } = require("express");
const {
  createUserValidator,
  updateUserValidator,
} = require("../validators/user.validators");

const { createUser, updateUser, getAllUsers, getUserConversations } = require("../controllers/user.controllers");

const router = Router();
// TODO username, email, password

router.get("/api/v1/users/:username/conversations", getUserConversations)
router.get("/api/v1/users", getAllUsers)
router.post("/api/v1/users", createUserValidator, createUser)
router.put("/api/v1/users/:id", updateUserValidator, updateUser);

module.exports = router;