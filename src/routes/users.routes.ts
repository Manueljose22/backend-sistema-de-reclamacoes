import { Router } from "express";
import CreateUserController from "../controllers/user/CreateUserController";
import UpdateUserController from "../controllers/user/UpdateUserController";
import GetAllUserController from "../controllers/user/GetAllUserController";
import DeleteUserController from "../controllers/user/DeleteUserController";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";



const router = Router();

router.get('/', GetAllUserController.handle);
router.post('/create', ensuredAuthenticated, CreateUserController.handle);
router.put('/:id', UpdateUserController.handle);
router.delete('/:id', DeleteUserController.handle);



export  {router as usersRouter}