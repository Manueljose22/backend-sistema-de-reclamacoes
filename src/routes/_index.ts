import { Router } from "express";
import { ComplaintsRouter} from "./complaints.routes";


const routes = Router();

routes.use('/complaint', ComplaintsRouter)



export { routes }