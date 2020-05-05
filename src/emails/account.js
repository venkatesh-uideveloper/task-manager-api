const sgMail = require('@sendgrid/mail');

// const sendgridAPIKey =
// 	'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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'venkatesh.uideveloper@gmail.com',
		subject: 'Thanks for joining in!',
		text: `welcome to th app, ${name}. Let me know how you get along with the app.`,
	});
};
const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'venkatesh.uideveloper@gmail.com',
		subject: 'Sorry to see you go!',
		text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
	});
};
module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
};
