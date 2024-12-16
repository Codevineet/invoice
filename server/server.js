require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("./config/passport");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173", 
  credentials: true, 
};


app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Login with Google</a>");
});

app.use("/auth", require("./routes/authRoutes"));
app.use("/invoices", require("./routes/invoiceRoutes"));
app.post("/zapier", require("./routes/zapierRoutes"));
app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
