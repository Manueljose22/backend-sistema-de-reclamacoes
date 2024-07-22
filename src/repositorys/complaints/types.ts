

export type complaintRequest  = {
    email: string;
    name: string;
    client_id: string;
    area: string;
    message: string;
    status: string;
    attachments: string;
}

export type CreateComplaint= {
    name: string
    email: string
    purl: string
}

export type IGetcomplaints = {
    id: string,
    client_id: string | null,
    createdAt: Date,
    updatedAt: Date | null,
    Client: {
        email: string;
        name: string | null;
    } | null,
    Complaint_Message: {
            area: string,
            message: string,
            user_id: string | null,
            client_id: string | null,
            attachments: string,
            createdAt: Date,
            User: {
                username: string
            } | null,
    }[],
    Complaint_status:{
            status: string, 
            context: string | null
        }[], 
}




