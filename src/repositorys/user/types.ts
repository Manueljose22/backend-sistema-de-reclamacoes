



export type userRequest = {
    id: string;
    username: string;
    password: string;
    role: string;
}


export type userSave = {
    id: string;
    username: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date | null; 
    deletedAt: Date | null;
}