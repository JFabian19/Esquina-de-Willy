
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './context/CartContext'
import { MenuProvider } from './context/MenuContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MenuProvider>
  </StrictMode>,
)
