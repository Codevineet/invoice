const getInvoices = require("../services/invoiceService");
const axios = require("axios"); 

exports.triggerZapierAutomation = async (req, res) => {
  try {
    const overdueInvoices = await getInvoices.getInvoices();
    if (overdueInvoices.length === 0) {
      return res.status(200).json({ message: "No overdue invoices." });
    }

    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    await axios.post(zapierWebhookUrl, { invoices: overdueInvoices });

    res.status(200).json({ message: "Automation Triggered Successfully" });
  } catch (error) {
    console.error("Error triggering Zapier automation:", error);
    res.status(500).json({ message: "Failed to trigger Zapier automation." });
  }
};
