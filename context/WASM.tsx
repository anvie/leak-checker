import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react'

const initial: IWASMContext = {}

export const WASMContext = createContext(initial)

export const WASMContextProvider: React.FC<WASMContextProviderProps> = ({
  children
}) => {
  const [state, setState] = useState<IWASMContext>(initial)

  useEffect(() => {
    console.log("loading wasm context...");
    (async() => {
      const wasm = await import('../wasm/pkg');
      await wasm.default()
      setState({ wasm })
    })()
  }, [])

  return (
    <WASMContext.Provider value={state}>
      {children}
    </WASMContext.Provider>
  )
}

interface IWASMContext {
  wasm?: typeof import('../wasm/pkg')
}

interface WASMContextProviderProps {
  children: ReactNode
}
