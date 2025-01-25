import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account.jsx';
import Bonus from './components/Bonus.jsx';
import { useState } from 'react';
import Reward from './components/Reward.jsx';
import Admin from './components/Admin.jsx';

function App() {
  const amount = useSelector(state=>state.account.amount)
  const points = useSelector(state=>state.bonus.points)
 const status = useSelector(state=>state.account.status)
  return (
    <div className="App">
      <h4>App</h4>
       <p>State :  {status}</p>
        <h3>Current Amount : {amount} </h3>
      
      <h3>Total Bonus : {points}</h3>
      <Admin/>  
      <Account/>
      <Bonus/>
      <Reward/>
    </div>
  );
}

export default App;
