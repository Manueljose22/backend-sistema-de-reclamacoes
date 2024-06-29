import  multer from 'multer';
import path from 'path';



const storage = multer.diskStorage({
   
    filename: (req, file, cb)=>{
        
        cb(null, Date.now() + String(Math.floor(Math.random() * 1000)) + path.extname(file.originalname));
    },

    destination(req, file, cb) {
        let folder: string = '';

       if(req.baseUrl.includes('complaint')){
            folder = 'attachments';
        } 

        cb(null, `public/${folder}` );

    },
    
})


export const filesUpload = multer({
    storage: storage
});