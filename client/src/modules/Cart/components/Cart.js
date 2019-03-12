import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { Row, Col } from 'reactstrap';
import CheckoutForm from '../../../components/CheckoutForm';
import CartOrderList from '../../../components/CartOrderList';
import { removeOrderFromCart } from '../actions';
import { postOrders } from '../../Orders/actions';


class Cart extends Component {

    componentDidMount() {
        // this.props.fetchOrders();
    }

    removeOrderItem = order => {
        this.props.removeOrderFromCart(order);
    }

    onSubmitCheckoutForm = user => {
        const { orders, fetchToCreateOrders } = this.props;
        const data = {
            user,
            orders,
        }
        console.log('form data', data);

        fetchToCreateOrders(data);
    }

    render() {
        const { orders } = this.props;
        

        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>Checkout Cart !!!</h1>
                    {
                        orders.length ? (
                            <div>
                                <CartOrderList removeItem={this.removeOrderItem} items={orders}/>
                                <CheckoutForm onSubmit={this.onSubmitCheckoutForm}/> 
                            </div>
                        ) : (
                            <p>В данный момент ваша корзина пуста!</p>
                        ) 
                    }
                </Col>
            </Row>
        );
    };

};


const mapStateToProps = (state) => ({
    orders: state.cart.orders,
});

const mapDispatchToProps = {
    removeOrderFromCart: order => removeOrderFromCart(order),
    fetchToCreateOrders: data => postOrders(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
