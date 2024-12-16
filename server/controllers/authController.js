
require("dotenv").config();
exports.googleAuthCallback = (req, res) => {
    res.redirect(process.env.REDIRECT_URI);
  };
  
  exports.logout = (req, res) => {
    req.logout(() => {
      res.redirect("/");
    });
  };
  