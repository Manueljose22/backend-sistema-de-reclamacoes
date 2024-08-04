import { Request, Response } from 'express';
import { GetAreasByIdService } from '../../services/areas/GetAAreasByIdService copy';




class GetAreasByIdController {

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        try {

            const service = new GetAreasByIdService();
            const result = await service.execute(id);

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetAreasByIdController;