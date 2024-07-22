import { compare } from "bcrypt";
import { userSave } from "../../repositorys/user/types";
import UserRepository from "../../repositorys/user/UserRepository";
import { sign } from "jsonwebtoken";


type sessionRequest = {
    username: string;
    password: string;
}

type sessionData = {
    id: string;
    username: string;
    role: string;
    token: string;
}

class sessionService {

    async execute({username, password}: sessionRequest): Promise<sessionData | Error> {

        const user = await UserRepository.findByName(username);

        if (!username) {
            throw new Error('Preencha o campo username!')
        } else if (!user?.username) {
            throw new Error('Username incorreto, verifique e tente novamente!')
        } else if(!password){
            throw new Error('Preencha o campo senha!')
        }

        const passMatch = await compare(password, user.password);

        if (!passMatch) {
            throw new Error('Senha incorreta!')
        }

        const token = sign({
            id: user.id,
            role: user.role
        },process.env.JWT_Secrect as string, {
            expiresIn: '1d'
        })

        
        const data: sessionData = {
            id: user.id,
            username: user.username,
            role: user.role,
            token: token
        }

        return data;
        
    }

}

export { sessionService };