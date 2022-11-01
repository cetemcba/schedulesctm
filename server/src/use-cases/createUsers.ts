import { prisma } from "../prisma";
import { Request, Response } from "express";

interface userProps {
    name: string,
    email: string,
}

export class CreateUsersUsecases {

    async handle(req: Request, res: Response) {

        const { name, email }: userProps = req.body
        const emailAux = email.split("@")
        console.log(emailAux[1])

        if(emailAux[1] != 'cetemcba.com'){
            console.error('Email invalido, apenas emails do dominio cetemcba são aceitos')
            return res.status(500).send('Email invalido, apenas emails do dominio cetemcba são aceitos')
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
            }
        });

        return res.json(user);
    }
}