const axios = require("axios");

exports.triggerZapierAutomation = async (req, res) => {
  try {
    console.log("happened");
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    
    await axios.post(zapierWebhookUrl, {
      message: "Static Zapier Trigger", 
    });

    res.status(200).json({ message: "Zapier automation triggered successfully!" });
  } catch (error) {
    console.error("Error triggering Zapier automation:", error);
    res.status(500).json({ message: "Failed to trigger Zapier automation." });
  }
};
