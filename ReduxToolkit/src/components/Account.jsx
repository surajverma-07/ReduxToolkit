import { useState } from "react";
function Account() {
 
 const [value,setValue] = useState(0) ; 
 const[value2,setValue2]  = useState(0)
 

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
          <input type='text' onChange={(e)=>setValue(+e.target.value)}></input>
          <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By {value} +</button>
          <input type='text' onChange={(e)=>setValue2(+e.target.value)}></input>
          <button onClick={()=>dispatch(decrementByAmount(value2))} disabled={err}>Decrement By {value2} -</button>
          <button onClick={()=>dispatch(getUserAccount(1))}>Init Account</button>

        </div>
      </div>
  );
}

export default Account;
