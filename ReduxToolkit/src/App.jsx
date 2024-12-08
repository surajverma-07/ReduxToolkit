import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account.jsx';
import Bonus from './components/Bonus.jsx';

function App() {
  
  return (
    <div className="App">
      <h4>App</h4>
      {account.pending ? (
        <p>loading....</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current Amount : {amount} </h3>
      )}
      <h3>Total Bonus : {points}</h3>

      <Account/>
      <Bonus/>
    </div>
  );
}

export default App;
