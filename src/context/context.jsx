import { createContext } from "react";

export const Contexto = createContext()

export function ProvedorContexto ({children}) {
  const dado = 'oi, context'

  
  const valorContexto = {
    dado,
  }

  return (

    <Contexto.Provider value={valorContexto}>
      {children}
    </Contexto.Provider>

  )
}