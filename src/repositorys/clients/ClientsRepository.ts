import { prismaClient } from "../../db/prismaClient";
import { clientRequest, clientSave, IClientsRepository } from "./IClientsRepository";




export class ClientsRepository implements IClientsRepository {
    
    async save({email, name}: clientRequest): Promise<clientSave> {
        const client = await prismaClient.client.create({
            data: {
                email,
                name
            }
        })

        return client
    }

    async findByEmail(email: string): Promise<clientSave | null> {
      
        const client = await prismaClient.client.findFirst({
        where: {
            email
        }
       });

       return client;
    }

}