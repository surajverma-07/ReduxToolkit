import { createStore, applyMiddleware,combineReducers } from "redux";
import logger from "redux-logger"; // Default export for redux-logger
import { thunk } from "redux-thunk"; // Default export for redux-thunk
import axios from "axios";

// Constants
const INC = "amount/increment";
const DEC = "amount/decrement";
const INC_BY_AMT = "amount/incrementByAmount";
// const INIT = "amount/init";
const bonusINC = "bonus/increment";
const BNS_INC_BY_AMT = "bonus/incrementByAmount";
const GET_USER_DATA_SUCCESS = 'amount/success';
const GET_USER_DATA_PENDING = 'amount/pending';
const GET_USER_DATA_REJECT = 'amount/error';

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
    case GET_USER_DATA_SUCCESS:
      return { amount: action.payload , pending:false};
    case GET_USER_DATA_PENDING:
      return {...state,pending:true} 
    case GET_USER_DATA_REJECT:
      return {...state,error:action.error, pending:false}   
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
    case BNS_INC_BY_AMT:
        if(action.payload >= 100)
          return { points: state.points + 10 };
    case bonusINC:
        return {points:state.points+1}    
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
function bonusIncreByAmount(value){
  return {type:BNS_INC_BY_AMT,payload:value};
}
function bonusIncrement(){
  return {type:bonusINC}
}
function accountDataSuccess(value){
  return {type:GET_USER_DATA_SUCCESS,payload:value}
}
function accountDataReject(error){
  return {type:GET_USER_DATA_REJECT,error:error}
}
function accountDataPending(){
  return {type:GET_USER_DATA_PENDING}
}
// Async Action Creator (Thunk)
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      // dispatch(accountDataPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(accountDataSuccess(data.amount));
    } catch (error) {
      dispatch(accountDataReject(error.message))
    }
  };     
}

// Dispatching Async Action
// store.dispatch(getUser(2));
// store.dispatch(incrementByAmount(300))
setInterval(() => {
  // store.dispatch(incrementByAmount(300))
    //  store.dispatch(bonusIncrement());
    //  store.dispatch(bonusIncreByAmount(200));
   store.dispatch(getUserAccount(1));

}, 5000);
