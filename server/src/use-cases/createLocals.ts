import { prisma } from "../prisma"
import { Request, Response } from "express";

export class CreateLocals{

    async handle(req: Request, res: Response) {

        const { name, type, description, openHour, closeHour } = req.body

        const local = await prisma.local.create({
            data: {
                name,
                type,
                description,
                openHour,
                closeHour,
            }
        });

        return res.json(local);
    }
}