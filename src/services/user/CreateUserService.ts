import { hash } from "bcrypt";
import { userRequest, userSave } from "../../repositorys/user/types";
import UserRepository from "../../repositorys/user/UserRepository";






class CreateUserService {

    async execute({username, password, role}: Omit<userRequest, 'id'>): Promise<userSave | Error> {

        const user = await UserRepository.findByName(username);

        if (user) {
            throw new Error(`Já existe um usuário com o username ${user.username}!`)
        }

        if (!username) {
            throw new Error('Preencha o campo username, é obrigatório!')
        } else if (!password) {
            throw new Error('Preencha o campo senha, é obrigatório!')
        } else if (password.length <= 3 || password.length > 12) {
            throw new Error('Senha deve conter no minímo 6 e 12 no máximo de caracteres!')
        } else if (!role) {
            throw new Error('Preencha o campo cargo, é obrigatório!')
        }

        const passHash = await hash(password, 12);

        const newUser = await UserRepository.save({username, password: passHash, role});

        return newUser;
    }
}

export { CreateUserService };