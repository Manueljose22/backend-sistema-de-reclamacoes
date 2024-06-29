import { prismaClient } from "../../db/prismaClient";
import { complaintRequest, complaintSave, IComplaintsRepository } from "./IComplaintsRepository";




export class ComplaintsRepository implements IComplaintsRepository {

    async save({ area, attachments, message, client_id }: Omit<complaintRequest, 'name' | 'email' | 'status'>): Promise<complaintRequest> {

        
        const complaint = await prismaClient.complaint.create({
            data: {
                client_id: client_id,
               
            }
        })

        await prismaClient.complaint_Message.create({
            data: {
                area,
                message, 
                attachments,
                complaint_id: complaint.id,
                client_id: client_id
            }
        })

        await prismaClient.complaint_Status.create({
            data: {
                complaint_id: complaint.id,
            }
        })

        return complaint;
    }

    async findById(id: string): Promise<complaintSave |  null> {
        const complaint = await prismaClient.complaint.findFirst({
            where: {
                id
            }, include: {
                Client: {
                    select: {
                        email: true,
                        name: true
                    }
                }
            }
        })

        return complaint;
    }

    async findAll(): Promise<complaintSave[] | null> {
        
        const complaints = await prismaClient.complaint.findMany({
            include: {
                Client: {
                    select: {
                        email: true,
                        name: true
                    }
                }
            }
        });

        return complaints;
    }

}