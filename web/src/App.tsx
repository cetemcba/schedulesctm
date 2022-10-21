import { useState } from "react"
import { MySchedules } from "./components/MySchedules"
import { NewSchedule } from "./components/NewSchedule"
import { agendametos } from "./utils/utilitarios"

function App() {

  const [isOpen, setIsOpen] = useState(true)


  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
        <img src={"../public/cetemLogoBranca.png"} alt="Logo" className="w-20"/>
        <h1 className="text-2xl font-bold m-4">Agendamentos</h1>
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-3/6 ">
        <div className={`flex flex-row space-x-8 ${isOpen ? 'flex' : 'hidden'} `}>
                <h1 className="px-4 py-2 text-lg font-medium">Meus Agendamentos</h1>
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-blue-500 bg-opacity-20
                  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
                  focus-visible:ring-opacity-75">
                    Novo Agendamento
                  </button>
        </div>
         {isOpen? <MySchedules/> : <NewSchedule/> }
        </div>
      </div>
    </>

    )
}

export default App
