



export type clientRequest = {
    email: string;
    name: string | null;
}

export type clientSave = {
    id: string;
    email: string;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface IClientsRepository {
    save(data: clientRequest): Promise<clientSave>;
    findByEmail(email: string): Promise<clientSave | null>;
}