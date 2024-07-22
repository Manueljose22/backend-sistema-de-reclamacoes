import Mailgun from 'mailgun-js';
import { IMailOptions } from './types';




const sendEmail = Mailgun({
    apiKey: 'd7e82dcd35e11e9427f63ab9e2d485e0',
    domain: process.env.DOMAIN as string
});


export const sendMailgun = (email: string, purl: string) => {

    const mailOptions: IMailOptions = {
        from: '"SISTEMA DE RECLAMAÇÔES" <techstar.info73@gmail.com>',
        to: email,
        subject: 'Reclamação submetida com sucesso',
        text: 'Muito obrigado por entrar em conctato, responderemos em breve.',
        html: `
            <html>
            <body>
                <h3>SISTEMA DE RECLAMAÇÔES</h3><br>
                <p>Clique no link para aceder a sua reclamação:</p><br>
                <a href="${purl}"> Reclamação </a>
            </body>
            </html>
              `
    };

    try {
        sendEmail.messages().send(mailOptions);
        console.log('E-mail enviada');
    } catch (error: any) {
        console.log('Erro de envio: ', error.message);
    }

}


