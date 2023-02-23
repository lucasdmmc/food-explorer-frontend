import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes/app.routes'
import { GlobalStyles } from './styles/default'
import { defaultTheme } from "./styles/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
)
