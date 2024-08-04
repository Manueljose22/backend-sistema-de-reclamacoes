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

    async findAll(): Promise<IGetcomplaints[] | null>{

        const complaints = await prismaClient.complaint.findMany({
            include: {
                Client: {
                    select: {
                        email: true,
                        name: true
                    }
                },
                Complaint_Message: {
                    select: {
                        area: true,
                        attachments: true,
                        client_id: true,
                        complaint_id: true,
                        message: true,
                        Complaint: true,
                        createdAt: true,
                        user_id: true,
                        id: true,
                        User: {
                            select:{
                                id: true,
                                role: true,
                                username: true,
                            }
                        }
                    }
                },
                Complaint_status: {
                    select: {
                        id: true,
                        complaint_id: true,
                        Complaint: true,
                        context: true,
                        status: true,
                        createdAt: true
                    }
                }
            }
        });

        return complaints;
    }

}

export default new ComplaintsRepository;