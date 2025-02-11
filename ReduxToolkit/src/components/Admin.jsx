import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddAccountMutation, useGetAccountsQuery } from "../api/adminSlice";

function Admin() {
 const {data,error,isLoading} = useGetAccountsQuery();
 const [addAccount,response] = useAddAccountMutation();
  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Admin Component</b>
          </h4>
          {
            data && data.map((account)=> <p key={account.id}>{account.id}:{account.amount}</p>)
          }
          <button onClick={()=>addAccount(777,(data?data.lenght+1:11))}>Add User</button>
          {/* <button onClick={()=>dispatch(incrementBonus())}>Increment +</button> */}
        </div>
      </div>
  );
}

export default Admin;
