import React from 'react';
import OrderItem from './OrderItem';

const olderList = ({ items, onItemClick }) => {
    
    if(!items.length) return null;
    
    return (
        <div className="order-list">
            {
                items.map(item => <OrderItem item={item} addToBasket={onItemClick} key={item.id} />)
            }
        </div>
    )
};

export default olderList;