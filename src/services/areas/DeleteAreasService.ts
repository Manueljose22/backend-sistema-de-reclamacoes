import AreasRepository from "../../repositorys/areas/AreasRepository";





class DeleteAreasService {

    async execute(id: string): Promise<void | Error> {

        const area = await AreasRepository.findById(id);

        if (!area) {
            throw new Error('Área inválida!');
        }

        await AreasRepository.delete(id);
    }
}

export { DeleteAreasService };