import { Contexto } from "./context/context"
import { AddTarefa } from "./components/adicionarTarefa/addtarefa"
import { useContext } from "react"
import { Tarefa } from "./components/tarefa/tarefa"

export function App() {

  const { listaTarefas } = useContext(Contexto)

  return (
    <div className="container">
      <AddTarefa></AddTarefa>

      {console.log(listaTarefas)}

      {listaTarefas.map((item, index) => {
        return <Tarefa key={index} conteudo={item}></Tarefa>
      })}
    </div>
  )
}


