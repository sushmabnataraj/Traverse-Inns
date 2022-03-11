const sgMail = require('@sendgrid/mail');
const sendGridAPIKey = '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';

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'assignmentms5@gmail.com', // Change to your verified sender
        subject: 'Thanks for joining in!',
        text: `Hi ${name}, Welcome to travel the world.`,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
}    

module.exports = {
    sendWelcomeEmail
}