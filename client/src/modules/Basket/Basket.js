import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { Row, Col } from 'reactstrap';
// import BasketOrderList from './components/BasketOrderList';


class Basket extends Component {

    componentDidMount() {
        // this.props.fetchOrders();
    }

    addToBasket = (orderId) => (ev) => {
        // this.props.addOrderToBasket(orderId);
        // console.log(orderId);
    }

    render() {
        const { isLoading, orderList } = this.props;
        if (isLoading) {
            return <span> show spinner!!!</span>
        }

        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>Basket!!!</h1>
                </Col>
            </Row>
        );
    };

};

const orderInBasketSelector = (state) => {
    const selectedOrders = state.basket.selectedId;
    const orders = state.orders.data;
    const result = [];

    return selectedOrders.map(order => {
        
    })

}

const mapStateToProps = (state) => ({
    isLoading: state.orders.isLoading,
    orderList: orderInBasketSelector(state),
});

// const mapDispatchToProps = {
//     // fetchOrders: (id) => fetchOrders(id),
//     // addOrderToBasket: (id) => addOrderToBasket(id),
//
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Basket);
export default connect(mapStateToProps)(Basket);
