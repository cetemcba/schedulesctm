import { agendametos } from "../utils/utilitarios"
import {api} from "../lib/api"
import { useEffect, useState } from "react"

interface Scheduleprops{
    local: string,
    status: string,
    starHour: string,
    endHour: string,
}

interface Schedulesprops extends Array<Scheduleprops>{}

export function MySchedules(){
    const [schedules, setSchedule ] = useState<Schedulesprops>([]);
    useEffect(()=>{
        api.get('/myschedules/7658dd7f-a2c8-4b82-9e82-fe955a03fa87')
        .then((response)=> response.data)
        .then((data)=> setSchedule(data))
    },[api]);
    
    console.log(schedules)

    /*const data = api.get('')
    .then(response => response.data)
    .then(data => {
        
        console.log(data)
        return data.
    })*/
    

    return(
        <>
            {schedules.map((schedule:any,id: any) => {
                console.log(schedule.local.name)
            })}
            <div>
            <table className="w-full mt-8 mb-8 mr-16">
                <thead className="border-b border-zinc-800">
                    <th>Local</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {schedules.map((schedule:Scheduleprops, id) => {
                        return(
                            <tr key={id} className="border-b border-zinc-800">
                                <td className="p-1">{schedule.local.name}</td>
                                <td className="p-1">{schedule.starHour}</td>
                                <td className="p-1">{schedule.endHour}</td>
                                <td className={`p1 ${schedule.status === 'Confirmado' ? 'text-lime-600': '' }`}>{schedule.status}</td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
            </div>
        </>
        
    )
}

/*const getServerSideProps = async () =>{
    const [getSchedules] = await Promise.all(
        [api.get('/myschedules/7658dd7f-a2c8-4b82-9e82-fe955a03fa87')]
    )

    return{
       props:{
           local: getSchedules.data.local.name,
           data: getSchedules.data.startdate,
           status: getSchedules.data.status
       }
    }
}*/