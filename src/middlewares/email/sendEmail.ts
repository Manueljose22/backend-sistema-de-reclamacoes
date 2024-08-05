import { createTransport} from 'nodemailer';
import { IMailOptions } from './types';
import dotenv from 'dotenv';
dotenv.config();




 
export const sendEmail = async (email: string, purl: string) => {

    const transporter = createTransport({
        port: 587,
        secure: false,
        host: 'smtp.office365.com',
        auth: {
            user: process.env.OUTLOOK_USER,
            pass: process.env.OUTLOOK_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions: IMailOptions = {
        from: '"SISTEMA DE RECLAMAÇÔES" <techstar24@outlook.com>',
        to: email,
        subject: 'Reclamação submetida com sucesso',
        text: 'Muito obrigado por entrar em conctato, responderemos em breve.',
        html: `
            <html>
            <body>
                <h3>SISTEMA DE RECLAMAÇÔES</h3><br>
                <p>Clique no link abaixo para aceder a sua reclamação:</p><br>
                <p>http://localhost:5000/${purl} </p>
            </body>
            </html>
              `
      };

    try {
        const info = await transporter.sendMail(mailOptions);
       return console.log('Mensagem enviada: %s', info.messageId);
    } catch (error: any) {
        console.error('Erro ao enviar email:', error.message);
    }

}



