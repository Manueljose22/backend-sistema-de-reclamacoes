import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';




class CreateUserController {
    async handle(request: Request, response: Response) {

        const {username, password, role} = request.body;

        try {

            const service = new CreateUserService();
            const result = await service.execute({username, password, role})

            return response.status(201).json(result);
            
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreateUserController;