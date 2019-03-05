import React, { Component } from 'react';
import CartOrderItem from './CartOrderItem';

class CartOrderList extends Component {

  render() {
    const { orders, removeItem } = this.props;
    return (
        <div className="cart-modal-order-list">
            {
                orders.map((order,index) => (
                <CartOrderItem key={index} removeItem={removeItem} order={order} />
                ))  
            }
        </div>  
    );
  }
}

export default CartOrderList;


