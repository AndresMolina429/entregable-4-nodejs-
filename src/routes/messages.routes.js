const { Router } = require('express');

const { createMessage } = require('../controllers/messages.controllers');

const router = Router();

router.post("/api/v1/messages", createMessage);

module.exports = router;