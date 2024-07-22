import { Request, Response } from 'express';
import { GetAllUserService } from '../../services/user/GetAllUserService';





class GetAllUserController {
    async handle(request: Request, response: Response) {
      
        try {
                const service = new GetAllUserService();
                const result = await service.execute()
                return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetAllUserController;