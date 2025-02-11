import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation
} from "../api/adminSlice";

function Admin() {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  const [amount, setAmount] = useState(1);
  const [amount1, setAmount1] = useState(1);
  const [editing, setEditing] = useState(null);
  const [id, setId] = useState(0);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading accounts</p>}

        {data &&
          data.map((account) => (
            <div id="admindata" key={account.id}>
              <p>
                {account.id}:
                <input
                  type="text"
                  value={editing === account.id ? amount1 : account.amount}
                  readOnly={editing !== account.id}
                  onChange={(e) => setAmount1(e.target.value)}
                />
              </p>
              <button
                onClick={() => {
                  setEditing(account.id);
                  setAmount1(account.amount);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  updateAccount({ id: account.id, amount: parseInt(amount1) });
                  setEditing(null);
                }}
              >
                Update User
              </button>
              <button onClick={() => deleteAccount(account.id)}>
                Delete User
              </button>
            </div>
          ))}

        <div>
          <input
            type="number"
            placeholder="Enter user id eg. 11"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={() => addAccount({ id: parseInt(id), amount: parseInt(amount) })}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
