import nodemailer from 'nodemailer';
import util from 'util';
import nunjucks from 'nunjucks';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'siddhuv93@gmail.com',
        pass: 'Ramsey@16'
    }
});

const mailOptions = {
    to: 'siddhuv93@gmail.com',
    from: 'siddhuv93@gmail.com',
    subject: 'Laptop prices'
};

async function sendMail(body) {
    const template = await nunjucks.render('templates/email.html', body);
    mailOptions.html = template;
    console.log('mailing');
    const mailResponse = await transporter.sendMail(mailOptions);

    console.log(`mail response = ${util.inspect(mailResponse)}`);
}

export { sendMail };