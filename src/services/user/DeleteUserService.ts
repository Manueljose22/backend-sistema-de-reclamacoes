import UserRepository from "../../repositorys/user/UserRepository";





class DeleteUserService {

    async execute(id: string): Promise<Error | void> {

        const user = await UserRepository.findById(id);

        if (!user) {
            throw new Error('Usuário inválido!');
        }

        await UserRepository.delete(id);
    }
}

export { DeleteUserService };