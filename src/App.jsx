import { Contexto } from "./context/context"
import { AddTarefa } from "./components/adicionarTarefa/addtarefa"
import { useContext } from "react"
import { Tarefa } from "./components/tarefa/tarefa"

export function App() {

  const { listaTarefas } = useContext(Contexto)

  return (
    <div className="container">
      <AddTarefa></AddTarefa>

      {listaTarefas.map((item) => {
        return <Tarefa key={item.id} id={item.id} conteudo={item.content}></Tarefa>
      })}
    </div>
  )
}


