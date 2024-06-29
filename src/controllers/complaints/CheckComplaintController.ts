import { Request, Response } from 'express';
import { CheckComplaintService } from '../../services/compplaints/CheckComplaintService';
import { ComplaintsRepository } from '../../repositorys/complaints/ComplaintsRepository';




class CheckComplaintController {

    async handle(request: Request, response: Response) {
        
        const {id} = request.params;

        try {

            const complaintRepository = new ComplaintsRepository();
            const service = new CheckComplaintService(complaintRepository);

            const result = await service.execute(id);

            return response.json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CheckComplaintController;