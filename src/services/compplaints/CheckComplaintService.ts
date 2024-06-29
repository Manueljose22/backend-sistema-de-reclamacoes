import { complaintSave, IComplaintsRepository } from "../../repositorys/complaints/IComplaintsRepository";





class CheckComplaintService {

    constructor(private IComplaintRepository: IComplaintsRepository) { }

    async execute(id: string): Promise<complaintSave | Error> {

        const complaint = await this.IComplaintRepository.findById(id);

        if (!complaint) {
            throw new Error('Registro não existe!');
        }


        complaint.attachments = JSON.parse(complaint.attachments)

        return complaint;
    }
}

export { CheckComplaintService };