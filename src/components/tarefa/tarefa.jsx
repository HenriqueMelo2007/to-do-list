import styles from "./tarefa.module.css"

export function Tarefa ({ conteudo }) {
  return (
    <div className={styles.boxTarefa}>
      <h1>{conteudo}</h1>
    </div>
  )
}