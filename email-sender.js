require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Setup email data
let mailOptions = {
  from: '"Node Mailer" <your-email@gmail.com>',
  to: 'your-email@gmail.com', // Replace with your email
  subject: 'Hello from Node.js',
  text: 'Hello Node',
  html: '<b>Hello Node</b>'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
