
const generatePurl = async (complaint_id: string) => {
    
    return  `localhost:5000/complaint/check/${complaint_id}`;
}



export { generatePurl };