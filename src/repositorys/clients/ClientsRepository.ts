import { prismaClient } from "../../db/prismaClient";
import { clientRequest} from "./types";




export class ClientsRepository {
    
    async save({email, name}: clientRequest){
        const client = await prismaClient.client.create({
            data: {
                email,
                name
            }
        })

        return client
    }

    async findByEmail(email: string) {
      
        const client = await prismaClient.client.findFirst({
        where: {
            email
        }
       });

       return client;
    }

}

export default new ClientsRepository