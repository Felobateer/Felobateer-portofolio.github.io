const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const email = express();

email.use(
  cors({
    origin: "https://felobateer-saadalla.netlify.app/",
  })
);
email.use(bodyParser.urlencoded({ extended: false }));
email.use(bodyParser.json());

email.post("/", async (req, res) => {
  const sender = req.body.sender;
  const text = req.body.text;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "felobateersaadalla@gmail.com",
      pass: "fyffcpksehqipiig",
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
