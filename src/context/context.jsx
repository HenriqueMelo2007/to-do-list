import { createContext } from "react";

export const Contexto = createContext()


export function ProvedorContexto ({children}) {

  
  const valorContexto = {}

  return (

    <Contexto.Provider value={valorContexto}>
      {children}
    </Contexto.Provider>

  )
}