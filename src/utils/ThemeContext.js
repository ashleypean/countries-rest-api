import React, { useContext, useState} from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}) {

  const [darkMode, setDarkMode]  = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }  

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext value={toggleDarkMode}>
        {children}
      </ThemeUpdateContext>
    </ThemeContext.Provider>
  )
}