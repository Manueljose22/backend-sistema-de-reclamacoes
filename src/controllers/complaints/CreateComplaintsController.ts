import { Request, Response } from 'express';
import { CreateComplaintsService } from '../../services/compplaints/CreateComplaintsService';




class CreateComplaintsController {

    async handle(request: Request, response: Response) {

        let attachments: string[] = []

        const {area, email, message, name} = request.body;

        if (request.file) {
            attachments.push(request.file.originalname, request.file.filename )
        }  
        // original: request.file.originalname,
        // newName: request.file.filename
        
        try {

            const service = new CreateComplaintsService();
            const result = await service.execute({area, attachments: JSON.stringify(attachments), email, message, name})

            return response.status(201).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }

    }
}

export default new CreateComplaintsController;