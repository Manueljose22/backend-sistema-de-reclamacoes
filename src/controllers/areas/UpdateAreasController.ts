import { Request, Response } from 'express';
import { UpdateAreasService } from '../../services/areas/UpdateAreasService';




class UpdateAreasController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const { area } = request.body;

        try {

            const service = new UpdateAreasService();
            const result = await service.execute(id, {area})

            return response.status(200).json({ message: 'Registro actualizado com sucesso!' })

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new UpdateAreasController;