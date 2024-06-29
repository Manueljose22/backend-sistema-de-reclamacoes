import { NextFunction, Request, Response } from "express";



const ComplaintFilds = (request: Request, response: Response, next: NextFunction) =>{
    
    const {area, email, message, name} = request.body;
    
    // if (!area) {
    //     return response.status(422).json({message: 'Preencha o campo area, é obrigatório!'})
    // } else if (!email) {
    //     return response.status(422).json({message:'Preencha o campo email, é obrigatório!'});
    // } else if (!message) {
    //     return response.status(422).json({message:'Preencha o campo area de reclamação, é obrigatório!'})
    // } else if (message.length > 3000) {
    //     return response.status(422).json({message:'O campo area de reclamação deve ter no máximo 3000 caracteres!'})
    // }

    next();
}


export const verifyFildsMiddleware = {
    ComplaintFilds,
}