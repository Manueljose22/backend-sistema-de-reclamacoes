import AreasRepository from "../../repositorys/areas/AreasRepository";
import { areaRequest } from "../../repositorys/areas/types";





class UpdateAreasService {

    async execute(id: string, { area }: areaRequest): Promise<void | Error> {

        const areaExists = await AreasRepository.findById(id);

        if (!areaExists) {
            throw new Error('Área inválida!');
        }

        await AreasRepository.update(id, { area });
    }
}

export { UpdateAreasService };