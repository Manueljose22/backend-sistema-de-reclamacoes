import { Request, Response } from 'express';
import { sessionService } from '../../services/session/sessionService';




class sessionController {
    async handle(request: Request, response: Response) {
        
        const {username, password} = request.body;

        try {

            const service = new sessionService();
            const result = await service.execute({username, password})

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new sessionController;