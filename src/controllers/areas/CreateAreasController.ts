import { Request, Response } from 'express';
import { CreateAreasService } from '../../services/areas/CreateAreasService';




class CreateAreasController {

    async handle(request: Request, response: Response) {

        const { area } = request.body;

        try {

            const service = new CreateAreasService();
            const result = await service.execute({ area });

            return response.status(201).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreateAreasController;