import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import  accountSlice  from './slices/AccountSlice.jsx'
import  bonusSlice  from './slices/BonusSlice.jsx'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer:{
    account:accountSlice,
    bonus:bonusSlice
  }
})
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
