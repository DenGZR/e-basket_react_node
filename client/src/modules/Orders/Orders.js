import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import OrderList from './components/OrderList';
import { fetchOrders } from './actions';
import { addOrderToBasket } from '../Basket/actions';

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    addToBasket = (orderId, quantity) => {
        console.log(orderId);
        this.props.addOrderToBasket(orderId, quantity);

    }

    render() {
        const { isLoading, orderList } = this.props;
        if (isLoading) {
            return <span> show spinner!!!</span>
        }

        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>order test!!!</h1>
                    <OrderList items={orderList} onItemClick={this.addToBasket}/>
                </Col>
            </Row>
        );
    };

};
const mapStateToProps = (state) => ({
    isLoading: state.orders.isLoading,
    orderList: state.orders.data,
});

const mapDispatchToProps = {
    fetchOrders: (id) => fetchOrders(id),
    addOrderToBasket: (id, quantity) => addOrderToBasket(id, quantity),

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
