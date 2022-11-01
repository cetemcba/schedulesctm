import { Request, Response } from "express";
import {prisma} from "../prisma";

export class ListSchedulesPerUsers{

    async handle(req: Request, res: Response){

        console.log(req.params)

        const {id} = req.params;

        const user = await prisma.user.findFirst({
            where:{
                id
            }, include:{
                    schedules:{
                        include:{
                            local:true
                        }
                    }
                    
            }
            
        });

        return res.json(user)
    }
}
