import { useState } from "react";
function Account() {
 
 const [value,setValue] = useState(0) ; 
 const[amount,setAmount]  = useState(0);
  function incByval(value){
         setAmount(amount+parseInt(value));
         console.log("amount ", amount);
         
  }
 console.log("Amount :: ", amount);
  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Account Component</b>
          </h4>
          <h3>Amount:${amount}</h3>
          {/* <h3>points:${points}</h3> */}
          <button onClick={(e)=>setAmount(e.target.value++)}>Increment +</button>
          <button onClick={(e)=>setAmount(e.target.value--)}>Decrement -</button>
          <input type='text' onChange={(e)=>setValue(+e.target.value)}></input>
          <button onClick={(e)=>incByval(value)}>Increment By {value} +</button>

        </div>
      </div>
  );
}

export default Account;
