import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { createStore,combineReducers,applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import logger from 'redux-logger'
import { accountReducer } from './reducers/Account.jsx'
import { bonusReducer } from './reducers/Bonus.jsx'

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </StrictMode>
)
