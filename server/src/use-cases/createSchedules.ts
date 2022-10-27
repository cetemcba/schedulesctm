import { prisma } from "../prisma"
import { Request, Response } from "express";

export class CreateSchedulesUsecases {

    async handle(req: Request, res: Response) {

        const { localId,local,description,materialId,type,starHour,endHour,status,authorId } = req.body
        const schedule = await prisma.schedule.create({
            data: {
                localId,
                local,
                description,
                materialId,
                type,   
                starHour,
                endHour,  
                status,   
                authorId, 
            }
        });

        return res.json(schedule);
    }
}