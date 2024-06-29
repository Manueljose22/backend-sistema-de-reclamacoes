

export type complaintRequest  = {
    id: string;
    email: string;
    name: string;
    client_id: string;
    area: string;
    message: string;
    status: string;
    attachments: string;
}

export type complaintSave = {
    id: string;
    client_id: string | null;
    area: string;
    message: string;
    attachments: string;
    status: string; 
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    Client: {
        name: string;
        email: string;
    }
}



export interface IComplaintsRepository {
    save(data: complaintRequest): Promise<complaintRequest>;
    findById(id: string): Promise<complaintSave | null>;
    findAll(): Promise<complaintSave[] | null>;
}