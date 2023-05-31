import styles from './addtarefa.module.css'

export function AddTarefa () {
  return (
    <div className={styles.boxAdd}>
      <input className={styles.inputAdd} type="text" placeholder="Adicione uma tarefa" />
      <button className={styles.btnAdd}>+</button>
    </div>
  )
}