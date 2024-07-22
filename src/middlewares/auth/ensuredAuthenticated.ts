import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";



type JWTPayload = {
    id: string;
    role: string;
    iat: number;
    exp: number;
}


export const ensuredAuthenticated = (request: Request, response: Response, next: NextFunction) => {

    const auth = request.headers.authorization;

    if (!auth) {
        return response.status(401).json({ message: 'Acesso negado!' });
    }

    const token = auth && auth.split(' ')[1];
    
    try {

        const { id, role } = verify(token, process.env.JWT_Secrect as string) as JWTPayload;
        request.user  = {
            userId: id,
            role: role
        };

        next();

    } catch (error) {
        return response.status(400).json({ message: 'token invalid!' })
    }

}