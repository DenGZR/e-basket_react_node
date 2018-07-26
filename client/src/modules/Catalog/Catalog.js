import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import OrderList from './components/OrderList';
import { fetchData } from './actions';


class Catalog extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    addToBasket = (orderId, quantity) => {
        console.log(orderId);
        this.props.addOrderToBasket(orderId, quantity);

    }

    render() {
        const { isLoading, data } = this.props;
        if (isLoading) {
            return <span> show spinner!!!</span>
        }
        console.log('data', data);

        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>order test!!!</h1>                    
                </Col>
            </Row>
        );
    };

};
const mapStateToProps = (state) => ({
    isLoading: state.catalog.isLoading,
    data: state.catalog.data,
});

const mapDispatchToProps = {
    fetchData: () => fetchData(),
    

};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
