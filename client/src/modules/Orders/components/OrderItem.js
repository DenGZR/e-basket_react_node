import React from 'react';

const orderItem = ({ item, addToBasket }) => {
    const { title, imgSrc, description, id } = item;
    debugger;
    return (
        <div className="list-item" >
            <h2>{title}</h2>
            <img src={imgSrc} alt="foto"/>
            <p>{description}</p>
            <button onClick={addToBasket(id)}>Добавить в корзину</button>
        </div>
    )
};

export default orderItem;
