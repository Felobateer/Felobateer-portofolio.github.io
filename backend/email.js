const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const email = express();

const allowedOrigins = [
  "https://felobateer-saadalla.netlify.app",
  "http://127.0.0.1:5500",
  "https://psaadalla.com",
];

email.use(
  cors({
    origin: allowedOrigins.map((url) => url),
  })
);
email.use(bodyParser.urlencoded({ extended: false }));
email.use(bodyParser.json());

email.post("/api", async (req, res) => {
  const sender = req.body.sender;
  const text = req.body.text;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: sender,
    to: "felobateersaadalla@gmail.com",
    subject: "email from portfolio",
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Email not sent");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

const port = process.env.PORT || 3000;

email.listen(port, () => console.log(`Server is running on port ${port}`));
