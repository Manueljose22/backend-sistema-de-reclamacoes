import { hash } from "bcrypt";
import { userRequest, userSave } from "../../repositorys/user/types";
import UserRepository from "../../repositorys/user/UserRepository";






class UpdateUserService {

    async execute({id, username, password, role}: userRequest): Promise<userSave | Error> {

        const user = await UserRepository.findById(id);

        if (!user) {
            throw new Error('Usuário inválido!')
        }

        if (user.username === username) {
            throw new Error(`Já existe um usuário ${username}, tente outro!`)
        }

        if (!password) {
            password = user.password;
        } else {
            const passHash = await hash(password, 12);
            password = passHash;
        }


        const userUpdated = await UserRepository.update(
            {
                id,
                username: username ?? user.username, 
                password: password ?? user.password, 
                role:     role ?? user.role
            });

        return userUpdated;
    }
}

export { UpdateUserService };