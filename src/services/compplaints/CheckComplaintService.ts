import ComplaintsRepository from "../../repositorys/complaints/ComplaintsRepository";
import { IGetcomplaints } from "../../repositorys/complaints/types";





class CheckComplaintService {

    async execute(id: string): Promise< IGetcomplaints | Error> {

        let complaint = await ComplaintsRepository.findById(id)
        if (!complaint) {
            throw new Error('Registro não existe!');
        }
        
        return complaint;
    }
}

export { CheckComplaintService };

