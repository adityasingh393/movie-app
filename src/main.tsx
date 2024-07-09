import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material'
import './index.css'

const theme =createTheme();
ReactDOM.createRoot(document.getElementById('root')!).render(

<ThemeProvider theme={theme}>

<React.StrictMode>
    <App />
  </React.StrictMode>,
</ThemeProvider>
)
