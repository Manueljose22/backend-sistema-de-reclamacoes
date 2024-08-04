import { Request, Response } from 'express';
import { GetAllComplaintService } from '../../services/compplaints/GetAllComplaintService';




class GetAllComplaintController {

    async handle(request: Request, response: Response) {
        
        try {

            const service = new GetAllComplaintService();
            const result = await service.execute();

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetAllComplaintController;