const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
admin.initializeApp();

// Set SendGrid API Key
sgMail.setApiKey('PU5VTWB1QDTRLJTKAAMQ94UW'); // Replace with your SendGrid API key

exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const msg = {
    to: user.email, // The email address of the newly created user
    from: 'your-email@example.com', // Your verified SendGrid sender email
    subject: 'Welcome to Our App!',
    text: `Hello ${user.displayName || 'User'}, welcome to our app!`,
    html: `<strong>Hello ${user.displayName || 'User'}, welcome to our app!</strong>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Welcome email sent to:', user.email);
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
});
