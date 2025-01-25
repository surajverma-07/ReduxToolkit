import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAccountsQuery } from "../api/adminSlice";

function Admin() {
 const {data,error,isLoading} = useGetAccountsQuery();

  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Admin Component</b>
          </h4>
          {
            data && data.map((account)=> <p>{account.id}:{account.amount}</p>)
          }
          
          {/* <button onClick={()=>dispatch(incrementBonus())}>Increment +</button> */}
        </div>
      </div>
  );
}

export default Admin;
