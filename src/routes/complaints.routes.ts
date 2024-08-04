import { Router } from "express";
import { filesUpload } from "../middlewares/upload/filesUpload";
import CreateComplaintsController from "../controllers/complaints/CreateComplaintsController";
import CheckComplaintController from "../controllers/complaints/CheckComplaintController";
import GetAllComplaintController from "../controllers/complaints/GetAllComplaintController";


const router = Router();

router.post('/create', filesUpload.single('attachments'), CreateComplaintsController.handle);
router.get('/check/:id', CheckComplaintController.handle);
router.get('/', GetAllComplaintController.handle);



export  {router as ComplaintsRouter}