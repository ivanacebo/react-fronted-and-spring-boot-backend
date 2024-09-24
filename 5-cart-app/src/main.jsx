import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarpApp } from './CarpApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarpApp />
  </StrictMode>,
)
