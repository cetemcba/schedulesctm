import { prisma } from "../prisma"
import { Request, Response } from "express";

export class CreateSchedules {

    async handle(req: Request, res: Response) {

        const { localId,description,materialId,starHour,endHour,status,authorId,materialQuantity } = req.body
        const schedule = await prisma.schedule.create({
            data: {
                localId,
                description,
                materialId,
                starHour,
                endHour,  
                status,   
                authorId, 
                materialQuantity,
            }
        });

        return res.json(schedule);
    }
}