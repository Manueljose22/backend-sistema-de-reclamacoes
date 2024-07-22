import { Request, Response } from 'express';
import { DeleteUserService } from '../../services/user/DeleteUserService';




class DeleteUserController {

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {

            const service = new DeleteUserService();
            const result = await service.execute(id);

            return response.status(200).json({ message: 'Registro eliminado com sucessso!' });

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new DeleteUserController;