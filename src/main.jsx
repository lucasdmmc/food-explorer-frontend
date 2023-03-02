import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts/authContext'
import { Router } from './routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
