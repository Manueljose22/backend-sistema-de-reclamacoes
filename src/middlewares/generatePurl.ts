import { hash} from "bcrypt";



const generatePurl = async (complaint_id: string) => {
    
    // const purl = await hash(complaint_id, 10);

    return  `/complaint/check/${complaint_id}`;
}



export { generatePurl };