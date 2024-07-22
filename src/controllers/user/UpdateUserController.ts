import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';




class UpdateUserController {
    async handle(request: Request, response: Response) {
        
        const {id} = request.params;
        const {username, password, role} = request.body;

        try {

            const service = new UpdateUserService();
            const result = await service.execute({id, username, password, role})

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new UpdateUserController;