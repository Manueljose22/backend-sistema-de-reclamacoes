import { sendEmail } from "../../middlewares/email/sendEmail";
import { IMailOptions } from "../../middlewares/email/types";
import { generatePurl } from "../../middlewares/generatePurl";
import { IClientsRepository } from "../../repositorys/clients/IClientsRepository";
import { complaintRequest, IComplaintsRepository } from "../../repositorys/complaints/IComplaintsRepository";



interface dataComplaint{
    name: string;
    email: string;
    purl: string
}


class CreateComplaintsService {

    constructor(private IComplaintsRepository: IComplaintsRepository,
        private IClientRepository: IClientsRepository) { }

    async execute({ area, attachments, email, message, name }: Omit<complaintRequest, 'id' | 'status' | 'client_id'>): Promise<dataComplaint | Error> {

        let purl: string;
        const client = await this.IClientRepository.findByEmail(email);

        if (!area) {
            throw new Error( 'Preencha o campo area, é obrigatório!')
        } else if (!email) {
            throw new Error('Preencha o campo email, é obrigatório!');
        } else if (!message) {
            throw new Error('Preencha o campo area de reclamação, é obrigatório!')
        } else if (message.length > 3000) {
            throw new Error('O campo area de reclamação deve ter no máximo 3000 caracteres!')
        }
        const data = {
            name: '',
            email: '',
            status: '',
            client_id: '',
            area: area,
            message: message,
            attachments: attachments,
        }

        if (client) {
            data.client_id = client.id
            const complaint = await this.IComplaintsRepository.save(data);
            purl = await generatePurl(complaint.id);

        } else {
            const newCient = await this.IClientRepository.save({ email, name });
            data.client_id = newCient.id;
            const complaint = await this.IComplaintsRepository.save(data);
            purl = await generatePurl(complaint.id);
        }

       
        // const mailOptions: IMailOptions = {
        //     from: '"SISTEMA DE RECLAMAÇÔES" <sistema.reclamacoes@gmail.com>',
        //     to: email,
        //     subject: 'Reclamação submetida com sucesso',
        //     text: 'Olá',
        //     html: `<h3>SISTEMA DE RECLAMAÇÂO </h3> <p>Clique no link para aceder a sua reclamação:</p><a href="${purl}"> Reclamação </a> `
        //   };
          
        // sendEmail(mailOptions);
        
        
        return { name, email, purl};
    }
}

export { CreateComplaintsService };