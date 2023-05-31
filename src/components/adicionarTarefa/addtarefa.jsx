import styles from './addtarefa.module.css'
import { Contexto } from '../../context/context'
import { useContext, useState } from 'react'


export function AddTarefa () {
  const { funcAddTarefa } = useContext(Contexto)

  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.boxAdd}>
      <input className={styles.inputAdd} type="text" placeholder="Adicione uma tarefa" value={inputValue} onChange={handleChange} />
      <button onClick={() => [setInputValue(''), funcAddTarefa(inputValue)]} className={styles.btnAdd}>+</button>
    </div>
  )
}