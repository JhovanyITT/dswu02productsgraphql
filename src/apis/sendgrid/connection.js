const sgMail = require('@sendgrid/mail');

// Configura tu API Key de SendGrid 
sgMail.setApiKey('API_KEY_HERE');

module.exports = sgMail;
