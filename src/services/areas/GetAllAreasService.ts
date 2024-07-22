import AreasRepository from "../../repositorys/areas/AreasRepository";
import { saveAreas } from "../../repositorys/areas/types";






class GetAllAreasService {

    async execute(): Promise<saveAreas[] | null> {
        const areas = await AreasRepository.findAll();
        return areas;
    }
}

export { GetAllAreasService };