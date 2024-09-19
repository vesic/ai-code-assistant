import { createContext, useEffect, useState } from 'react'
import { initialValue, initialInstructions, models } from '../helpers/data'

const INSTRUCTIONS = 'local-instructions'

type AppContextType = {
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
  model: string
  setModel: React.Dispatch<React.SetStateAction<string>>
  instructions: string[]
  setInstructions: React.Dispatch<React.SetStateAction<string[]>>
  deleteInstruction: (instruction: string) => void
  currentValue: string
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<AppContextType>({
  language: '',
  setLanguage: () => {},
  model: '',
  setModel: () => {},
  instructions: [],
  setInstructions: () => {},
  deleteInstruction: (_instruction: string) => {},
  currentValue: '',
  setCurrentValue: () => {}
})

type Props = {
  children: React.ReactNode
}

export function AppContextProvider({ children }: Props) {
  const [language, setLanguage] = useState('typescript')
  const [model, setModel] = useState(models[0])
  const [instructions, setInstructions] = useState<string[]>([])
  const [currentValue, setCurrentValue] = useState(initialValue)

  const deleteInstruction = (instruction: string) => {
    const curr = instructions.filter(value => instruction !== value)
    setInstructions(curr)
  }

  useEffect(() => {
    if (localStorage.getItem(INSTRUCTIONS)) {
      const localInstructions = JSON.parse(localStorage.getItem(INSTRUCTIONS) || '')
      setInstructions(localInstructions)
      return
    }
    setInstructions(initialInstructions)
  }, [])

  useEffect(() => {
    if (instructions.length > 0) {
      localStorage.setItem(INSTRUCTIONS, JSON.stringify(instructions))
    }
  }, [instructions])

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        model,
        setModel,
        instructions,
        setInstructions,
        deleteInstruction,
        currentValue,
        setCurrentValue
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
