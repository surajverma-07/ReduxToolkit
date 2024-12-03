import { createStore, applyMiddleware,combineReducers } from "redux";
import logger from "redux-logger"; // Default export for redux-logger
import { thunk } from "redux-thunk"; // Default export for redux-thunk
import axios from "axios";

// Constants
const INC = "increment";
const DEC = "decrement";
const INC_BY_AMT = "incrementByAmount";
const INIT = "init";

// Store
const store = createStore(
    combineReducers({
         amount:amountReducer,
         bonus:bonusReducer
    }),
    applyMiddleware(logger.default, thunk));

// Reducer
function amountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case INIT:
      return { amount: action.payload };
    case INC:
      return { amount: state.amount + 1 };
    case DEC:
      return { amount: state.amount - 1 };
    case INC_BY_AMT:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}
function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case INC_BY_AMT:
        if(action.payload >= 100)
          return { points: state.points + 1 };
    default:
      return state;
  }
}


// Action Creators
function initUser(value) {
  return { type: INIT, payload: value };
}

function increment() {
  return { type: INC };
}

function decrement() {
  return { type: DEC };
}

function incrementByAmount(value) {
  return { type: INC_BY_AMT, payload: value };
}

// Async Action Creator (Thunk)
function getUser(id) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(initUser(data.amount));
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };     
}

// Dispatching Async Action
// store.dispatch(getUser(2));
store.dispatch(incrementByAmount(300))
