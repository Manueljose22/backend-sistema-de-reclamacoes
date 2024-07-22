

export type areaRequest = {
    area: string
}

export type saveAreas = {
    id: string;
    area: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}