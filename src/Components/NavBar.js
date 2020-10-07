import React from 'react';
import {useHistory } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import ReceiptIcon from '@material-ui/icons/Receipt';

export default function NavBar(navVal) {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  function goToHome(){
    history.push("/home")
  }
  function goToList(newValue){
    console.log(newValue);
    setValue(newValue)
    history.push("/orderList")
  }
  function goToReceipt(){
    history.push("/Receipt")
  }
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        goToList(newValue);
      }}
    >
      <BottomNavigationAction onClick={goToHome} label="Recents" icon={<HomeIcon />} />
      <BottomNavigationAction onClick={goToList} label="Order List" icon={<ListIcon />} />
      <BottomNavigationAction onClick={goToReceipt} label="Reciept" icon={<ReceiptIcon />} />
    </BottomNavigation>
  );
}