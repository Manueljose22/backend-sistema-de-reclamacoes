import { Router } from "express";
import { ComplaintsRouter} from "./complaints.routes";
import { areasRouter } from "./areas.routes";
import { usersRouter } from "./users.routes";
import { sessionRouter } from "./session.routes";
import { adminRouter } from "./admin.routes";


const routes = Router();

routes.use('/complaint', ComplaintsRouter);
routes.use('/areas', areasRouter);
routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);
routes.use('/admin', adminRouter);



export { routes }