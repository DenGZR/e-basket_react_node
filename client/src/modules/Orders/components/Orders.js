import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { Row, Col, Spinner } from 'reactstrap';
import OrderList from './OrderList';
import { loadOrders } from '../actions';

class Orders extends Component {

    componentDidMount() {
        this.props.loadOrders();
    }

    // removeOrderItem = order => {
    //     this.props.removeOrderFromCart(order);
    // }

    // onSubmitCheckoutForm = user => {
    //     const { orders, fetchToCreateOrders } = this.props;
    //     const data = {
    //         user,
    //         orders,
    //     }
    //     console.log('form data', data);

    //     fetchToCreateOrders(data);
    // }

    render() {
    
        const { isLoading, orders } = this.props;
        if (isLoading || !orders) {
            return <Spinner color="primary" />
        }
        
        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>Admin Orders !!!</h1>
                    {
                        orders.length ? (
                            <div>
                                <OrderList removeItem={this.removeOrderItem} orders={orders}/>
                            </div>
                        ) : (
                            <p>В данный момент заказов нет!</p>
                        ) 
                    }
                </Col>
            </Row>
        );
    };

};


const mapStateToProps = (state) => ({
    orders: state.orders.data,
});

const mapDispatchToProps = {
    loadOrders: () => loadOrders(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
