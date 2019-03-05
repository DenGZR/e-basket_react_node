import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'reactstrap';
import { fetchData } from './actions';
import CardItem from './components/CardItem';
import { addOrderToCart } from '../Cart/actions';

class Brand extends Component {

    componentDidMount() {
        const { url } = this.props.match;
        this.props.fetchData(url);
    }

    render() {
        const { isLoading, brandItemsList, addOrderToCart } = this.props;
        if (isLoading || !brandItemsList) {
            return <Spinner color="primary" />
        }
        // if (!data) return null;
        console.log('data', brandItemsList);
    

        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>Brand !!!</h1>  
                    <Row>   
                    {
                        brandItemsList.map((item, index) => (
                            <Col xs={{ size: 4 }}>
                                <CardItem key={index} addToCart={this.props.addOrderToCart} {...item} />
                            </Col>
                        ))
                    }    
                    </Row>     
                </Col>
            </Row>
        );
    };

};
const mapStateToProps = (state) => ({
    isLoading: state.brandItem.isLoading,
    brandItemsList: state.brandItem.data,
});

const mapDispatchToProps = {
    fetchData: brandName => fetchData(brandName),
    addOrderToCart: order => addOrderToCart(order)
};

export default connect(mapStateToProps, mapDispatchToProps)(Brand);
