import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery } from "../api/adminSlice";

function Admin() {
 const {data,error,isLoading} = useGetAccountsQuery();
 const [addAccount] = useAddAccountMutation();
 const [deleteAccount] = useDeleteAccountMutation();
 const [amount,setAmount]=useState(1);
 const [id,setId]=useState(0);
  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Admin Component</b>
          </h4>
          {
            data && data.map((account)=> <div id='admindata' key={account.id}><p >{account.id}:{account.amount}</p>
                 <button  onClick={()=>deleteAccount(account.id)}>Delete User</button>
            </div>
          )
          }
          <div>
           <input type="number" placeholder="Enter user id eg.11" onChange={(e)=>setId(e.target.value)} />
           <input type="number" placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} />

          <button onClick={()=>addAccount(parseInt(amount),id)}>Add User</button>
          </div>
          
        </div>
      </div>
  );
}

export default Admin;
