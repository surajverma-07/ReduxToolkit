import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmt } from "../slices/AccountSlice";
function Account() {
 const dispatch = useDispatch();
 const [value,setValue] = useState(0) ; 
 const amount = useSelector(state=>state.account.amount)
 const points = useSelector(state=>state.bonus.points)
  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Account Component</b>
          </h4>
          <h3>Amount:${amount}</h3>
          <h3>points:${points}</h3>
          <button onClick={()=>dispatch(increment())}>Increment +</button>
          <button onClick={()=>dispatch(decrement())}>Decrement -</button>
          <input type='text' onChange={(e)=>setValue(e.target.value)}></input>
          <button onClick={(e)=>dispatch(incrementByAmt(value))}>Increment By {value} +</button>

        </div>
      </div>
  );
}

export default Account;
