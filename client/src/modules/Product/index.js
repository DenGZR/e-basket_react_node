import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'reactstrap';
import { fetchData } from './actions';
import ProductItem from './components/ProductItem';
import { addOrderToCart } from '../Cart/actions';

class Product extends Component {

    componentDidMount() {debugger;
        const { url } = this.props.match;
        this.props.fetchData(url);
    }

    render() {
        const { isLoading, product } = this.props;
        if (isLoading || !product) {
            return <Spinner color="primary" />
        }
        // if (!data) return null;
        console.log('data', product);
    
        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>product !!!</h1>  
                    {
                        product.map((productItem, index) => (
                            <ProductItem key={index} addToCart={this.props.addOrderToCart} {...productItem} />
                        ))
                    }
                </Col>
            </Row>
        );
    };

};
const mapStateToProps = (state) => ({
    isLoading: state.product.isLoading,
    product: state.product.data,
});

const mapDispatchToProps = {
    fetchData: productName => fetchData(productName),
    addOrderToCart: order => addOrderToCart(order)
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
