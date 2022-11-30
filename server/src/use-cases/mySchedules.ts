import { Request, Response } from "express";
import {prisma} from "../prisma";

export class MySchedules{

    async handle(req: Request, res: Response){

        console.log(req.params)

        const {authorId} = req.params;

        const schedules = await prisma.schedule.findMany({
            where:{
                authorId
            }, include:{
                    local:true
                    }
                }       
        );

        return res.json(schedules)
    }
}
