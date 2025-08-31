// src/main.tsx
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const root = document.getElementById('root')!
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)