import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Home from './pages/home'
import './providers/i18n'
import theme from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Home/>
    </ThemeProvider>
  </StrictMode>,
)
