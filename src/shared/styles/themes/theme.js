import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../global-style'
import dark from './dark'
import light from './light'

// NOTE: Options added here will be automatically available globally
const themeOptions = {
  dark,
  light
}

const themeOptionKeys = Object.keys(themeOptions)

const ThemeContext = React.createContext({
  themeId: 'light',
  theme: light,
  themeOptions,
  themeSet: () => {}
})

const ThemeManager = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const [themeId, themeSet] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) themeSet(storedTheme)
    setMounted(true)
  }, [])

  const storeTheme = themeId => {
    localStorage.setItem('theme', themeId)
    themeSet(themeId)
  }

  // TODO: Test production environment, consider loading render
  if (!mounted) return null

  const theme = themeOptions[themeId]

  const themeContext = {
    themeId,
    theme,
    themeOptions: themeOptionKeys,
    themeSet: storeTheme 
  }
  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme}>
        { children }
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
} 

export const withTheme = Component => props =>
  <ThemeContext.Consumer>
    {({ theme, themeId, themeOptions, themeSet }) =>
      <Component
        {...props}
        theme={{ data: theme, themeId, themeOptions, themeSet }}
      /> 
    }
  </ThemeContext.Consumer>

export default ThemeManager