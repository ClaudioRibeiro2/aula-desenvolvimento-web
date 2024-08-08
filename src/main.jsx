import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Create } from './pages/Create'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <About />
    <Create />
  </StrictMode>,
)
