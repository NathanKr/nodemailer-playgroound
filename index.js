const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // --- following is sensitive info so put on the machine
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

var mailOptions = {
  from: process.env.NODEMAILER_EMAIL,
  to: 'natankrasney@gmail.com',
  subject: 'Sending Email using Node.js',
  html: "<div style='text-align:right'> \
  <p>שלום</p><a href='https://lodigital.org/'>לודיגיטל</a><p>נתן</p> \
  </div>" 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});