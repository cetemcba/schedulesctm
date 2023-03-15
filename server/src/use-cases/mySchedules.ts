import { Request, Response } from "express";
import {prisma} from "../prisma";

export class MySchedules{

    async handle(req: Request, res: Response){
        

        const {authorId} = req.params;
        console.log(authorId)

        const schedules = await prisma.schedule.findMany({
            where:{
                authorId
            }, include:{
                Local: true
            }

            }       
        );


        return res.json(schedules)
    }
}
