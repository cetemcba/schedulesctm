import { Request, Response } from "express";
import { prisma } from "../prisma";

function isEqual(){
    if(status){

    }
}

export class ListDisponibleLocals{
    async handle(req: Request, res: Response){
        
        const local = await prisma.local.findMany({
            where:{
                isIndisponible: false
            }, include:{
                schedules:{
                    where:{
                        isFinished: false
                    }
                }
            }
        })

        return res.json(local)
    }
}