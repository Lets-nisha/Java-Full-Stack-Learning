
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <UserProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </UserProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
