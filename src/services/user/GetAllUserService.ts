import { userSave } from "../../repositorys/user/types";
import UserRepository from "../../repositorys/user/UserRepository";




class GetAllUserService {

    async execute(): Promise<userSave[] | null> {

        const users = await UserRepository.findAll();
        return users;
    }
}

export { GetAllUserService };