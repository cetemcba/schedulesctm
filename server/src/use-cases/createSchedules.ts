import { prisma } from "../prisma"
import { Request, Response } from "express";

export class CreateSchedulesUsecases {

    async handle(req: Request, res: Response) {

        const { local,localId,description,material,materialId,type,starHour,endHour,status,author,authorId, } = req.body
        const schedule = await prisma.schedule.create({
            data: {
                local,
                localId,
                description,
                material,
                materialId,
                type,   
                starHour,
                endHour,  
                status,   
                author, 
                authorId,
            }
        });

        return res.json(schedule);
    }
}