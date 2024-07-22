import { Router } from "express";
import sessionController from "../controllers/session/sessionController";



const router = Router();

router.post('/', sessionController.handle);




export { router as sessionRouter}