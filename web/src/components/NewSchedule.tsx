import {  FormEvent, useEffect,useState } from 'react';
import { Input } from "./Form/Input";
import DatePicker from 'react-date-picker';


import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';


//const [date, setDate] = useState(new Date())

const laboratories = [
    {
        id: 1,
        name: 'Laboratorio de Informatica',

    },
    {
        id: 2,
        name: 'Laboratorio de Enfermagem',

    },
    {
        id: 3,
        name: 'Laboratorio de Facial',

    },
    {
        id: 4,
        name: 'Laboratorio de Corporal',

    },
  ]

export function NewSchedule(){

    const [selectedLab, setSelectedLab] = useState (laboratories[0])
    const [date, setDate] = useState(new Date())
    const [query, setQuery] = useState('')

    /*const filteredPeople =
    query === ''
      ? laboratories
      : laboratories.filter((lab) => {
          return lab.toLowerCase().includes(query.toLowerCase())
        })
    */
    return(
        <>
            <div className="flex space-x-8 flex-col">
                <h1 className="px-4 py-2 text-lg font-medium">Novo Agendamento</h1>
                
                <form className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                    <label htmlFor="local" className="font-semibold">Qual o local?</label>
                    <select
                        name="local"
                        id="local"
                        className="bg-zinc-700 py-3 px-4 rounded text-sm placeholder:text-zinc-400 appearance-none"
                        defaultValue=""
                    >
                        <option disabled value="">Selecione o local que deseja agendar</option>

                        {laboratories.map(lab => {
                        return <option key={lab.id} value={lab.id}>{lab.name}</option>
                        })}
                    </select>
                    </div>

                    <div className="flex flex-col gap-2">
                    <label htmlFor="description">Descrição</label>
                    <Input name="description" id="description" placeholder="Para que proposito usará o laboratório" />
                    </div>

                    <div className="flex flex-col gap-2">
                    <label htmlFor="materials">Materiais</label>
                    <Input name="materials" id="materials" placeholder="Descreva os materiais ultilizados nos procedimentos" />
                    </div>

                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="quantity">Quantidade</label>
                        <Input name="quantity" id="quantity" type="number" placeholder="Quantidade de Kits" />
                    </div>
                    <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="date">Data do Agendamento</label>
                            <DatePicker  className='bg-zinc-600 rounded' onChange={setDate} value={date}/>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        
                        <div className="grid grid-cols-2 gap-2">
                        <label htmlFor="hourStart">Horaio de inicio:</label>
                        <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                        <label htmlFor="hourStart">Horaio de Termino:</label>
                        <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                        </div>
                    </div>
                    </div>


                    <footer className="mt-4 flex justify-end gap-4">
                    
                    <button
                        type="submit"
                        className=" bg-blue-500 bg-opacity-20 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-blue-600"
                    >
                        Realizar Agendamento
                    </button>
                    </footer>
                </form>
                
            </div>
        </>
    )

}