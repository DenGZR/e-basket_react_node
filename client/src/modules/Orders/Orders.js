import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import OrderList from './components/OrderList';
import { fetchOrders } from './actions';

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders();
    }

    addToBasket = (itemId) => (ev) => {
        const { orderList } = this.props;
        const targetItem = _.find(orderList, { 'id': itemId})
        console.log(targetItem);
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

    processForm = () => (ev) => {
        ev.preventDefault();
        const { values } = this.props.loginForm;
        this.props.fetchUserAuth(values);
    };

};
const mapStateToProps = (state) => ({
    isLoading: state.orders.isLoading,
    orderList: state.orders.data,
});

const mapDispatchToProps = {
    fetchOrders: (id) => fetchOrders(id),

};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
