import { Request, Response } from 'express';
import { ComplaintsRepository } from '../../repositorys/complaints/ComplaintsRepository';
import { CreateComplaintsService } from '../../services/compplaints/CreateComplaintsService';
import { ClientsRepository } from '../../repositorys/clients/ClientsRepository';




class CreateComplaintsController {

    async handle(request: Request, response: Response) {

        let attachments: {name: string, newName: string} = {name: '', newName: ''};

        const {area, email, message, name} = request.body;

        if (request.file) {
            attachments = {
                    name: request.file.originalname,
                    newName: request.file.filename
                }
            
        }  
        
        try {

            const complaintsRepository = new ComplaintsRepository();
            const clientsRepository = new ClientsRepository()
            const service = new CreateComplaintsService(complaintsRepository, clientsRepository);

            const result = await service.execute({area, attachments: JSON.stringify(attachments), email, message, name})

            return response.status(201).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }

    }
}

export default new CreateComplaintsController;