const sgMail = require('@sendgrid/mail');

// Configura tu API Key de SendGrid 
sgMail.setApiKey('SENDGRID-API-KEY');

module.exports = sgMail;
