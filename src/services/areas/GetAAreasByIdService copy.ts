import AreasRepository from "../../repositorys/areas/AreasRepository";
import { saveAreas } from "../../repositorys/areas/types";






class GetAreasByIdService {

    async execute(id: string): Promise<saveAreas | null> {
        const area = await AreasRepository.findById(id);
        
        if (!area) {
            throw new Error('Área inválida!')
        }

        return area;
    }
}

export { GetAreasByIdService };