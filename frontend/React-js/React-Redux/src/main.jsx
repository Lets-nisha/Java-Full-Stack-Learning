import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
// import './index.css'
import userReducer from './userReducer.js'
import App from './App.jsx'



let store = configureStore({
  reducer:userReducer
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
