import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account.jsx';
import Bonus from './components/Bonus.jsx';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h4>App</h4>
      
        <h3>Current Amount : {} </h3>
      
      <h3>Total Bonus : {}</h3>

      <Account/>
      <Bonus/>
    </div>
  );
}

export default App;
