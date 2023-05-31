import styles from './addtarefa.module.css'

export function AddTarefa () {
  return (
    <div className={styles.boxAdd}>
      <button className={styles.btnAdd}>+</button>
      <input className={styles.inputAdd} type="text" placeholder="Adicione uma tarefa" />
    </div>
  )
}