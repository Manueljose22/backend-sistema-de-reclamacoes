import { sendMailgun } from "../../middlewares/email/mailgun";
import { sendEmail } from "../../middlewares/email/sendEmail";
import { IMailOptions } from "../../middlewares/email/types";
import { generatePurl } from "../../middlewares/generatePurl";
import ClientsRepository  from "../../repositorys/clients/ClientsRepository";
import ComplaintsRepository from "../../repositorys/complaints/ComplaintsRepository";
import { complaintRequest, CreateComplaint} from "../../repositorys/complaints/types";



class CreateComplaintsService {


    async execute({ area, attachments, email, message, name }: Omit<complaintRequest, 'id' | 'status' | 'client_id'>): Promise<CreateComplaint | Error> {

        let purl: string;
        const client = await ClientsRepository.findByEmail(email);

        // Form validation
        if (!email) {
            throw new Error( 'Preencha o campo email, é obrigatório!')
        } else if (!area) {
            throw new Error('Preencha o campo area, é obrigatório!');
        } else if (!message) {
            throw new Error('Preencha o campo area de reclamação, é obrigatório!')
        } else if (message.length > 3000) {
            throw new Error('O campo area de reclamação deve ter no máximo 3000 caracteres!')
        }
    
        // Check if client extists, if exist create new complaint and get idClient, else create cliente and get id client
        if (client) {
            const complaint = await ComplaintsRepository.save({area, message, attachments, client_id: client.id});
            purl = await generatePurl(complaint.id);

        } else {
            const newCient = await ClientsRepository.save({ email, name });
            const complaint = await ComplaintsRepository.save({area, message, attachments, client_id: newCient.id});
            purl = await generatePurl(complaint.id);
        }

        // Send email
        sendEmail(email, purl);
        
        
        return { name, email, purl};
    }
}

export { CreateComplaintsService };