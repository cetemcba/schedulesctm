import { prisma } from "../prisma"
import { Request, Response } from "express";

export class CreateMaterialsUsecases {

    async handle(req: Request, res: Response) {

        const {name, description, type} = req.body
        const material = await prisma.material.create({
            data: {
                name,     
                description,
                type,      
            }
        });

        return res.json(material);
    }
}