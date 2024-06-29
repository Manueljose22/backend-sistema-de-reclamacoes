import { createTransport, getTestMessageUrl } from 'nodemailer';
import { IMailOptions } from './types';
import dotenv from 'dotenv';
dotenv.config();




export const sendEmail = async (mailOptions: IMailOptions) => {

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        }
    });

    try {
        const info = await transporter.sendMail(mailOptions);
       return console.log('Mensagem enviada: %s', info.messageId);
    } catch (error: any) {
        console.error('Erro ao enviar email:', error.message);
    }

}



