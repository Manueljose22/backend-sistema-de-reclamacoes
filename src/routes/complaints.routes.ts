import { Router } from "express";
import { filesUpload } from "../middlewares/upload/filesUpload";
import CreateComplaintsController from "../controllers/complaints/CreateComplaintsController";
import CheckComplaintController from "../controllers/complaints/CheckComplaintController";


const router = Router();

// router.get('/');
router.post('/create', filesUpload.single('attachments'), CreateComplaintsController.handle);
router.get('/check/:id', CheckComplaintController.handle);



export  {router as ComplaintsRouter}