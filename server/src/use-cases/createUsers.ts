import { prisma } from "../prisma";
import { Request, Response } from "express";

interface userProps {
    name: string,
    email: string,
}

export class CreateUsersUsecases {

    async handle(req: Request, res: Response) {

        const { name, email }: userProps = req.body

        const user = await prisma.user.create({
            data: {
                name,
                email,
            }
        });

        return res.json(user);
    }
}