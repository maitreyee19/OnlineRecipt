import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';
import { OrderList, AccountCard } from './Components/Receipt.js'

function useQuery() {
  return new URLSearchParams(useLocation().search);

}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavBar />
        </nav>

        <Switch>
          <Route path="/Receipt">
            <Receipt />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Receipt() {
  let query = useQuery();
  let receiptID = 0;
  if (query.get("receiptid")) receiptID = query.get("receiptid");
  return (
    <div>
      <div>Show receipt for #{receiptID} </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>)
}


function Home() {
  let account = []
  for (let i = 0; i < 10; ++i) {
    account.push(<AccountCard id={i} key={i} />)
  }
  return (
    <div >
      {account}
    </div>)
}


export default App;
