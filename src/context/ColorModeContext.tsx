import React from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

export const ColorModeContext = React.createContext({ toggleColorMode: () => { }, mode:'light' });

export const ColorModeProvider: React.FC<{children: ReactJSXElement}> = ({children}) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    console.log("🚀 ~ file: ColorModeContext.tsx:8 ~ mode:", mode)

    const toggleColorMode = React.useCallback(
      () => {
        setMode((pMode)=>pMode === 'light'?'dark':'light')
      },
      [],
    )
    

    return (
        <ColorModeContext.Provider value={{toggleColorMode, mode}}>
            {children}
        </ColorModeContext.Provider>
    )

}

export const useColorMode = () => {
    const context = React.useContext(ColorModeContext)
    if (!context) throw new Error("Contex doesn't exist")
    return context
}
