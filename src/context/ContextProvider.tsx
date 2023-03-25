import { FC } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { ColorModeProvider } from './ColorModeContext'


export const ContextProvider: FC<{children:ReactJSXElement}> = ({ children }) => {
  return (

    <ColorModeProvider>
      { children }
    </ColorModeProvider>

  )
}