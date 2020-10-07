import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

export function ReceiptCard({ id }) {
  const classes = useStyles();
  const history = useHistory();
  console.log(id);
  function goToReceipt() {
    history.push("/Receipt?receiptid=" + id);
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Chocolate
        </Typography>
        <Typography variant="body2" component="p">
          Cadbury
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goToReceipt} size="small">Load Receipt</Button>
      </CardActions>
    </Card>
  );
}


export function AccountCard({ id }) {
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
          Account Details
        </Typography>
      </CardContent>
    </Card>
  );
}

export function OrderList() {
  let orders = []
  for (let i = 0; i < 5; ++i) {
    orders.push(<ReceiptCard id={i} key={i} />)
  }
  return (<div><div>{orders}</div></div>)
}

export default {
  OrderList,
  ReceiptCard
}