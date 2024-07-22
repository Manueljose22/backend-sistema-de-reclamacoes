import { NextFunction, Request, Response } from "express";





export const authorizeRole = (role: string) =>{
  
    return (request: Request, response: Response, next: NextFunction) => {
        if (request.user.role !== role) {
            
            return response.status(403).json({message: 'Permissão negada!'})
        }
        
        next();
   }
} 