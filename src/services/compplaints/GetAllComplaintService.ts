import ComplaintsRepository from "../../repositorys/complaints/ComplaintsRepository";
import { IGetcomplaints } from "../../repositorys/complaints/types";





class GetAllComplaintService {

    async execute(): Promise< IGetcomplaints[] | Error> {

        let complaints = await ComplaintsRepository.findAll();

        if (!complaints) {
            throw new Error('Registro não existe!');
        }
        
        return complaints;
    }
}

export { GetAllComplaintService };

