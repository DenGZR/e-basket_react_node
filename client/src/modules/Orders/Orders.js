import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import OrderList from './components/OrderList';
import { fetchOrders, addOrderToBasket } from './actions';

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    addToBasket = (orderId) => (ev) => {
        this.props.addOrderToBasket(orderId);
        console.log(orderId);
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
    addOrderToBasket: (id) => addOrderToBasket(id),

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
