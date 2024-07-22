import { Router } from "express";
import CreateAreasController from "../controllers/areas/CreateAreasController";
import GetAllAreasController from "../controllers/areas/GetAllAreasController";
import DeleteAreasController from "../controllers/areas/DeleteAreasController";
import UpdateAreasController from "../controllers/areas/UpdateAreasController";


const router = Router();

router.get('/', GetAllAreasController.handle);
router.post('/create', CreateAreasController.handle);
router.delete('/:id', DeleteAreasController.handle);
router.put('/:id', UpdateAreasController.handle);



export  {router as areasRouter}