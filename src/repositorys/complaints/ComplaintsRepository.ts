import { prismaClient } from "../../db/prismaClient";
import { complaintRequest, IGetcomplaints } from "./types";




class ComplaintsRepository {

    async save({ area, attachments, message, client_id }: Omit<complaintRequest, 'name' | 'email' | 'status'>) {

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

    async findById(id: string): Promise<IGetcomplaints | null> {
       
        const complaint = await prismaClient.complaint.findFirst({
            where: {
                id
            }, include: {
                Client: {
                    select: {
                        email: true,
                        name: true
                    }
                },
                Complaint_Message: {
                    select: {
                        area: true,
                        message: true,
                        client_id: true,
                        user_id: true,
                        attachments: true,
                        createdAt: true,
                        User: {
                            select: {
                                username: true
                            }
                        }
                    }
                },
                Complaint_status: {
                    select: {
                        status: true,
                        context: true
                    }
                },

            }
        });
       

        return complaint;
    }

    async findAll(){

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

export default new ComplaintsRepository;