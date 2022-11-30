import { agendametos } from "../utils/utilitarios"
import {api} from "../lib/api"
import { useEffect, useState } from "react"

interface Schedulesprops{
    local: string,
    data: string,
    status: string,
}

export function MySchedules(props: Schedulesprops){
    const [schedule, setSchedule ] = useState();
    console.log(props.local)
    /*
    useEffect(()=>{
        api.get('/myschedules/7658dd7f-a2c8-4b82-9e82-fe955a03fa87')
        .then((response)=> setSchedule(response.data))
    },[]);
    
    console.log(schedule)

    const data = api.get('')
    .then(response => response.data)
    .then(data => {
        
        console.log(data)
        return data.
    })*/
    

    return(
        <>
            <div>
            <table className="w-full mt-8 mb-8 mr-16">
                <thead className="border-b border-zinc-800">
                    <th>Local</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {agendametos.map((agendametos,id) => {
                        return(
                            <tr className="border-b border-zinc-800">
                                <td key={id} className="p-1">{agendametos.local}</td>
                                <td className="p-1">{agendametos.date}</td>
                                <td className="p-1">{agendametos.hour}</td>
                                <td className={`p1 ${agendametos.status === 'Confirmado' ? 'text-lime-600': '' }`}>{agendametos.status}</td>
                            </tr>
                        )
                    })}  
                </tbody>
            </table>
            </div>
        </>
        
    )
}

const getServerSideProps = async () =>{
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
}