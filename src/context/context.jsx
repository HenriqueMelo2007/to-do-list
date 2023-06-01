import { createContext, useState } from "react";

export const Contexto = createContext()


export function ProvedorContexto ({children}) {

  const [listaTarefas, setListaTarefas] = useState([])

  const funcAddTarefa = (novaTarefa) => setListaTarefas(prevListaTarefas => [...prevListaTarefas, novaTarefa])

  const reset = (novaLista) => setListaTarefas(novaLista)

  const valorContexto = {
    listaTarefas,
    funcAddTarefa,
    reset,
  }

  return (

    <Contexto.Provider value={valorContexto}>
      {children}
    </Contexto.Provider>

  )
}