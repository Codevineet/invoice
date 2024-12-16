const express = require("express");
const router = express.Router();

const zapierController = require("../controllers/zapierController");
router.post("/trigger",require("../middleware/authMiddleware"),  zapierController.triggerZapierAutomation);

module.exports = router;
