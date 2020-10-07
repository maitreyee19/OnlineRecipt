import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 2,
    backgroundColor: 'grey'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  date_picker: {
    backgroundColor: 'pink'
  },
  button: {
    backgroundColor: 'purple'
  }

});

export function OrderCard({ order, name }) {
  const classes = useStyles();
  const history = useHistory();
  function goToReceipt() {
    history.push("/Receipt?receiptid=" + order.orderId);
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          <div>{order.item}</div>
        </Typography>
        <ul>
          <li>Order Date -{order.getOrderDate()}</li>
          <li>Order id - {order.orderId} </li>
        </ul>
      </CardContent>
      <CardActions>
        <Button className={classes.button} onClick={goToReceipt} size="small">Load Receipt</Button>
      </CardActions>
    </Card>
  );
}


export function AccountCard({ id, account }) {
  const classes = useStyles();
  const history = useHistory();
  console.log(id);
  function goToOrderList() {
    history.push("/orderList");
  }
  return (
    <Card className={classes.root} onClick={goToOrderList} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {account}
        </Typography>
      </CardContent>
    </Card>
  );
}

class Order {
  constructor(orderId, item, orderDate) {
    this.item = item;
    this.orderId = orderId;
    this.orderDate = orderDate;
  }
  getOrderDate() {
    let date = this.orderDate.getDate();
    let month = this.orderDate.getMonth();
    let year = this.orderDate.getFullYear();
    return month + "/" + date + "/" + year;
  }
}

export function OrderList() {
  const classes = useStyles();
  let orders = [
    new Order("12qw", "BTS Cashew", new Date(2020, 8, 10)),
    new Order("13rw", "CTS Peanuts", new Date(2020, 10, 1)),
    new Order("12nt", "GTS cranberries", new Date(2020, 10, 5)),
    new Order("32qw", "STS strawberry", new Date(2020, 10, 3)),
    new Order("224w", "LTS Pistachios", new Date(2020, 10, 2)),
    new Order("12qw4", "BTS apple", new Date(2019, 10, 2)),
    new Order("13rw3", "CTS orage", new Date(2019, 10, 1)),
    new Order("12nt2", "GTS pears", new Date(2020, 1, 5)),
    new Order("32qw1", "STS grapes", new Date(2020, 1, 3)),
    new Order("224w3", "LTS banana", new Date(2020, 1, 2))
  ]
  orders.sort((a, b) => b.orderDate.getTime() - a.orderDate.getTime())

  // let filterbasedOnEndDate = function (event) {
  //   console.log(event.target.value);
  //   useEffect(() => {
  //     setordersValue( () => orders.subarray(1,3))
  //    }, ordersValue);
  // }


  const [ordersValue, setordersValue] = useState({
    "orders" :orders
  });
  console.log(ordersValue)
  // setordersValue( (ordersValue) => {"orders" :  ordersValue.orders.concat([]) })
  return (
    <div>
      <div className={classes.date_picker}>
        <TextField
          id="date"
          label="start date"
          type="date"
          defaultValue="2017-05-24"
          // onChange={useEffect(() => {
          //   setordersValue( (orders) => orders)
          //  },  orders)}
          InputLabelProps={{
            shrink: true,
          }}
        /><TextField
          id="date"
          label="end date"
          type="date"
          defaultValue="2021-01-01"
          // onChange={useEffect(() => {
          //   setordersValue( (orders) => orders)
          //  }, orders)}
          InputLabelProps={{
            shrink: true,
          }}
        /></div>
      <div>
        {ordersValue.orders.map((order, index) => {
          return <OrderCard order={order} key={order.orderId} />
        })
        }
      </div>
    </div>)
}


export default {
  OrderList,
  OrderCard
}