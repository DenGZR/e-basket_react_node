import React, { Component } from 'react';
import CartOrderItem from './CartOrderItem';

class CartOrderList extends Component {

  render() {
    const { items, removeItem } = this.props;
    return (
        <div className="cart-modal-order-list">
            {
                items.map((item,index) => (
                    <CartOrderItem key={index} removeItem={removeItem} item={item} />
                ))  
            }
        </div>  
    );
  }
}

export default CartOrderList;


