import React, { Component } from 'react';

class CartOrderItem extends Component {
    // state = {
    //     quantity: 1,
    // }

    // onDecrease = () => {
    //     const { quantity } = this.state;
    //     this.setState({
    //         quantity: quantity - 1 < 0 ? 0 : quantity - 1
    //     });
    // }

    // onIncrease = () => {
    //     const { quantity } = this.state;
    //     this.setState({
    //         quantity: quantity + 1
    //     })
    // }

    // setQuantity = () => (ev) => {
    //     const quantity = ev.target.value;
    //     this.setState({
    //         quantity: quantity
    //     })
    // }

    // addItemToBasket = () => {
    //     const { item, addToBasket } = this.props;
    //     const { quantity } = this.state;
    //     addToBasket(item.id, quantity);
    // }

    onRemoveItem = () => {
        const { item, removeItem } = this.props;
        removeItem(item);
    }

    render() {
        const { item } = this.props;

        return (
            <div className="cart-order-item" >
                <img className="item-image" src={item.imgSrc} alt="foto"/>
                <p className="item-title">{item.title}</p>
                <p className="item-quantity">{`x${item.quantity}`}</p>
                <button className="item-remove-btn" onClick={this.onRemoveItem}>&times;</button> 
                {/* <button onClick={this.onDecrease}>-</button>
                <input type="text" value={quantity} onChange={this.setQuantity()} />
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.addItemToBasket()}>Добавить в корзину</button> */}
            </div>
        )
    }
}

export default CartOrderItem;
