const { Router } = require("express");
const {
  createUserValidator,
  updateUserValidator,
} = require("../validators/user.validators");

const { createUser, updateUser, getAllUsers, getUserConversations } = require("../controllers/user.controllers");
const authenticate = require("../middlewares/auth.midellware");

const router = Router();
// TODO username, email, password

router.get("/api/v1/users/:username/conversations", authenticate, getUserConversations)
router.get("/api/v1/users", authenticate, getAllUsers)
router.post("/api/v1/users", createUserValidator, authenticate, createUser)
router.put("/api/v1/users/:id", updateUserValidator, authenticate, updateUser);

module.exports = router;