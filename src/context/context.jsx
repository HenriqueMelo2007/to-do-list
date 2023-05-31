import { createContext, useState } from "react";

export const Contexto = createContext()


export function ProvedorContexto ({children}) {

  const [listaTarefas, setListaTarefas] = useState([])

  const funcAddTarefa = (novaTarefa) => setListaTarefas(prevListaTarefas => [...prevListaTarefas, novaTarefa])


  const valorContexto = {
    listaTarefas,
    funcAddTarefa,
  }

  return (

    <Contexto.Provider value={valorContexto}>
      {children}
    </Contexto.Provider>

  )
}