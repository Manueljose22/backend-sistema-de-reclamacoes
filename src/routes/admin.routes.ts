import { Router } from "express";
import { authorizeRole } from "../middlewares/auth/authorizeRole";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";



const router = Router();

router.get('/', ensuredAuthenticated, authorizeRole('admin'));




export { router as adminRouter}