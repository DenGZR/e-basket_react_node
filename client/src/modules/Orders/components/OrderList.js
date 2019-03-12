import React from 'react';
import OrderItem from './OrderItem';

const OrderList = ({ orders, onItemClick }) => {
    
    if(!orders.length) return null;
    
    return (
        <div className="order-list">
            {
                orders.map(order => <OrderItem item={order} addToBasket={onItemClick} key={order.id} />)
            }
        </div>
    )
};

export default OrderList;