import AreasRepository from "../../repositorys/areas/AreasRepository";
import { areaRequest, saveAreas } from "../../repositorys/areas/types";





class CreateAreasService {

    async execute({area}: areaRequest): Promise<saveAreas | Error> {

        const areaExists = await AreasRepository.findByName(area);

        if (areaExists) {
            throw new Error('Registro já existe!');
        }

        if (!area) {
            throw new Error( 'Preencha o campo area, é obrigatório!')
        } 

        return await AreasRepository.save({area})
    }
}

export { CreateAreasService };