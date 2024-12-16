const invoiceService = require("../services/invoiceService");

exports.getInvoices = async (req, res) => {
    try {
      const user = req.user;
      const invoices = await invoiceService.getInvoices();
      const response = {
        user,
        invoices,
      };

      res.status(200).json(response); 
    } catch (error) {
      console.error("Error fetching invoices:", error);
      res.status(500).json({ message: "Failed to fetch invoices." });
    }
};
