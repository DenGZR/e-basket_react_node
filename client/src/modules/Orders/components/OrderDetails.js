import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { Row, Col, Spinner } from 'reactstrap';
import CartOrderList from '../../../components/CartOrderList';
import { loadOrderDetails } from '../actions';
import { getOrdersCount, getOrdersTotal } from '../../Cart/selectors';

class OrderDetails extends Component {

    componentDidMount() {
        const { orderId } = this.props.match.params; 
        this.props.loadOrderDetails(orderId);
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
    
        const { isLoading, details } = this.props;
        if (isLoading || !details) {
            return <Spinner color="primary" />
        }
        console.log('details', details);

        const ordersCount = getOrdersCount(details.products);
        const ordersTotal = getOrdersTotal(details.products);

        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <div className="order-details">
                        <h1>Admin OrderDetails !!!</h1>
                        <h4>Номер заказ {details.id}</h4>
                        <div className="order-details-user">
                            <h4>Клиент</h4>
                            <p>
                                <span>Имя: </span>
                                <span>{details.createdBy.name}</span>
                            </p>
                            <p>
                                <span>Номер телефона: </span>
                                <span>{details.createdBy.phone}</span>
                            </p>
                            <p>
                                <span>Email:</span>
                                <span>{details.createdBy.email}</span>
                            </p>
                        </div>
                        <div className="order-details-products">
                            <CartOrderList removeItem={e => false} items={details.products}/>
                            <p>{`Товар(ов): ${ordersCount}`}</p>
                            <p>{`Итого: ${ordersTotal}`}</p>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        );
    };

};


const mapStateToProps = (state) => ({
    details: state.orders.details,
});

const mapDispatchToProps = {
    loadOrderDetails: id => loadOrderDetails(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
