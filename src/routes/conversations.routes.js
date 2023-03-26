const { Router } = require("express");
// const { createConversation } = require("../validator/conversation");

const { createCoupleConversation, createGroupConversation, getConversation } = require("../controllers/conversations.controllers");

const router = Router();

router.post("/api/v1/conversation/couple", createCoupleConversation )
router.post("/api/v1/conversation/group", createGroupConversation )
router.get("/api/v1/conversation/:id", getConversation )

module.exports = router;