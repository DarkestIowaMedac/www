const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.postmarkapp.com',
            port: 587,
            auth: {
                user: 'api',
                pass: process.env.POSTMARK_SERVER_TOKEN
            }
        });
    }

    async sendEmail(to, subject, text, html) {
        const mailOptions = {
            from: process.env.MAIL_FROM_ADDRESS,
            to: to,
            subject: subject,
            text: text,
            html: html
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            return info;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}

module.exports = new EmailService();