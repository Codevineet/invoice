const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");
router.get("/", require("../middleware/authMiddleware"), invoiceController.getInvoices);


module.exports = router;
