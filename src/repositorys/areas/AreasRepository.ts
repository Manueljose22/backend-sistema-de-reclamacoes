import { prismaClient } from "../../db/prismaClient";
import { areaRequest, saveAreas } from './types';





class AreasRepository {

    async save({ area }: areaRequest): Promise<saveAreas> {

        const areas = await prismaClient.area.create({
            data: {
                area
            }
        })

        return areas;
    }

    async findByName(area: string): Promise<saveAreas | null> {
        const areas = await prismaClient.area.findFirst({
            where: {
                area
            }
        });
        return areas;
    }
    
    async findById(id: string): Promise<saveAreas | null> {
        const area = await prismaClient.area.findFirst({
            where: {
                id
            }
        });
        return area;
    }

    async findAll(): Promise<saveAreas[] | null> {
        const areas = await prismaClient.area.findMany();
        return areas;
    }

    async update(id: string, {area}: areaRequest): Promise<void>{
        await prismaClient.area.update({
            data: {
                area,
                updatedAt: new Date()
            },
            where: {
                id
            }
        });
    }
    
    async delete(id: string): Promise<void>{
        await prismaClient.area.delete({
            where: {
                id
            }
        });
    }
}

export default new AreasRepository;