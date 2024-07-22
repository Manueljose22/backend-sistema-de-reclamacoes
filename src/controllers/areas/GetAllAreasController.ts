import { Request, Response } from 'express';
import { GetAllAreasService } from '../../services/areas/GetAllAreasService';




class GetAllAreasController {

    async handle(request: Request, response: Response) {
        
        try {

            const service = new GetAllAreasService();
            const result = await service.execute();

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetAllAreasController;