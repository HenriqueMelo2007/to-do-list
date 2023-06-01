import { useContext } from "react"
import styles from "./tarefa.module.css"
import { Contexto } from "../../context/context"

export function Tarefa ({ conteudo, id }) {

  const { listaTarefas, reset } = useContext(Contexto)

  function deletar(id) {
    const novasTarefas = listaTarefas.filter(tarefa => tarefa.id !== id);

    reset(novasTarefas)
    console.log(listaTarefas)
    console.log(novasTarefas)
    
  }


  return (
    <div className={styles.boxTarefa}>
      <input className={styles.inputTarefa} type="checkbox"/>
      <input className={styles.conteudoTarefa} readOnly type="text" value={conteudo} />
      <button className={styles.btnDel} onClick={() => deletar(id)}>Delete</button>
    </div>
  )
}