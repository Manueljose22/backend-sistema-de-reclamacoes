import { Request, Response } from 'express';
import { DeleteAreasService } from '../../services/areas/DeleteAreasService';




class DeleteAreasController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;

        try {

            const service = new DeleteAreasService();
            const result = await service.execute(id)

            return response.status(200).json({ message: 'Registro eliminado com sucesso!' })

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new DeleteAreasController;
