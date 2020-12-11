import React from 'react';
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css"


const TransactionHistory = ({items}) =>{
  return(<>
<table className ="transaction-history">

  <thead className = {styles.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className = {styles.tbody}>
{items.map((elem)=>{
return(
    <tr key = {elem.id}>
      <td>{elem.type}</td>
<td>{elem.amount}</td>
<td>{elem.currency}</td>
    </tr>
)

    })}
  </tbody>
</table>
  </>)
}
TransactionHistory.propTypes ={
  items:PropTypes.arrayOf(PropTypes.object)
}
TransactionHistory.defaultProps = {
  items: [{
    "type": "please check",
    "amount": "please check",
    "currency": "please check",
    "id": "and this, please check TOO"
}]
}

export default TransactionHistory;