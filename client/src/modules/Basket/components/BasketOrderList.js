import React from 'react';
import BaskeOrderItem from './BaskeOrderItem';

const olderList = ({ items, onItemClick }) => {
    
    if(!items.length) return null;
    
    return (
        <div className="order-list">
            {
                items.map(item => <BaskeOrderItem item={item} addToBasket={onItemClick} key={item.id} />)
            }
        </div>
    )
};

export default olderList;