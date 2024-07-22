import { prismaClient } from "../../db/prismaClient";
import { userRequest, userSave } from "./types";





class UserRepository {

    async save({ username, password, role }: Omit<userRequest, 'id'>): Promise<userSave> {

        const user = await prismaClient.user.create({
            data: {
                username,
                password,
                role
            }
        })

        return user;
    }

    async findById(id: string): Promise<userSave | null> {

        const user = await prismaClient.user.findFirst({
            where: {
                id
            }
        })

        return user;
    }

    async findByName(username: string): Promise<userSave | null> {

        const user = await prismaClient.user.findFirst({
            where: {
                username
            }
        })

        return user;
    }

    async findAll(): Promise<userSave[] | null> {
        const user = await prismaClient.user.findMany({
            where: {
                deletedAt: null
            }
        });
        return user;
    }

    async delete(id: string): Promise<void> {
        const user = await prismaClient.user.update({
            where: {
                id
            },
            data: {
                deletedAt: new Date()
            }
        })
    }

    async update({id, username, password, role }: userRequest): Promise<userSave> {
        const user = await prismaClient.user.update({
            where: {
                id
            },
            data: {
                username,
                password,
                role,
                updatedAt: new Date()
            }
        })

        return user;
    }



}


export default new UserRepository;