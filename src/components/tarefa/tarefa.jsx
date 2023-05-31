import styles from "./tarefa.module.css"

export function Tarefa ({ conteudo }) {
  return (
    <div className={styles.boxTarefa}>
      <input className={styles.inputTarefa} type="checkbox"/>
      <input className={styles.conteudoTarefa} readOnly type="text" value={conteudo} />
      <button className={styles.btnDel}>Delete</button>
    </div>
  )
}