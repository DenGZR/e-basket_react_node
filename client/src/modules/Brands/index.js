import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'reactstrap';
import AllBrandsList from './components/AllBrandsList';
import { fetchData } from './actions';
import { addOrderToCart } from '../Cart/actions';


class Brands extends Component {

    componentDidMount() {
        const { url } = this.props.match;
        this.props.fetchData(url);
    }

    render() {
        const { isLoading, brands } = this.props;
        if (isLoading || !brands) {
            return <Spinner color="primary" />
        }
       
        console.log('data', brands);
    
        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>Brands !!!</h1>   
                    <div>
                        {
                            brands.map((brand, index) => (
                                <AllBrandsList key={index} {...brand}/>
                            ))
                        }
                    </div>          
                </Col>
            </Row>
        );
    };

};
const mapStateToProps = (state) => ({
    isLoading: state.brands.isLoading,
    brands: state.brands.data,
});

const mapDispatchToProps = {
    fetchData: url => fetchData(url)
};

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
