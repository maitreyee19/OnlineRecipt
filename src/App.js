import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import logo from './logo.png';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Bill ID # {receiptID}
        </h3>
        <div >
          <ul className="bill_detail">
            <li>
              item quantity : 1
            </li>
            <li>
              item price : 10
            </li>
            <li>
              Tax : .94
            </li>
            <li>
             ________________
            </li>
            <li>
              Total : 10.94
            </li>
          </ul>
        </div>
      </header>
    </div>)
}


function Home() {
  let accounts = ["My Account", "Order List", "Settings", "Contact Us"]
  let accountCards =[];
  for (let i = 0; i < accounts.length; ++i) {
    accountCards.push(<AccountCard id={i} key={i} account={accounts[i]}/>)
  }
  return (
    <div >
      {accountCards}
    </div>)
}


export default App;
