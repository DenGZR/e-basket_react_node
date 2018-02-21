import React, { Component } from 'react';

class BasketOrderItem extends Component {
    state = {
        quantity: 1,
    }

    onDecrease = () => {
        const { quantity } = this.state;
        this.setState({
            quantity: quantity - 1 < 0 ? 0 : quantity - 1
        });
    }

    onIncrease = () => {
        const { quantity } = this.state;
        this.setState({
            quantity: quantity + 1
        })
    }

    setQuantity = () => (ev) => {
        const quantity = ev.target.value;
        this.setState({
            quantity: quantity
        })
    }

    addItemToBasket = () => {
        const { item, addToBasket } = this.props;
        const { quantity } = this.state;
        addToBasket(item.id, quantity);
    }

    render() {
        const { item, addToBasket } = this.props;
        const { title, imgSrc, description, id } = item;
        const { quantity } = this.state;

        return (
            <div className="list-item" >
                <h2>{title}</h2>
                <img src={imgSrc} alt="foto"/>
                <p>{description}</p>
                <button onClick={this.onDecrease}>-</button>
                <input type="text" value={quantity} onChange={this.setQuantity()} />
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.addItemToBasket()}>Добавить в корзину</button>
            </div>
        )
    }


}

export default BasketOrderItem;
