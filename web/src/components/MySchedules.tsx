import { agendametos } from "../utils/utilitarios"

interface Schedulesprops{
    local: string,
    data: string,
    status: string,
}

export function MySchedules(){

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
                    {agendametos.map((agendameto,id) => {
                        return(
                            <tr className="border-b border-zinc-800">
                                <td key={id} className="p-1">{agendameto.local}</td>
                                <td className="p-1">{agendameto.date}</td>
                                <td className="p-1">{agendameto.hour}</td>
                                <td className={`p1 ${agendameto.status === 'Confirmado' ? 'text-lime-600': '' }`}>{agendameto.status}</td>
                            </tr>
                        )
                    })}  
                </tbody>
            </table>
            </div>
        </>
        
    )
}