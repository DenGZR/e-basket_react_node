import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import OrderList from './components/OrderList';
import { fetchData } from './actions';


class Catalog extends Component {

    componentDidMount() {
        const url = this.props.location.pathname;
        this.props.fetchData(url);
    }

    componentWillReceiveProps(nextProps) {
        // will be true
        const locationChanged = nextProps.location.pathname !== this.props.location.pathname
        console.log('locationChanged', locationChanged);
        if (locationChanged) {
            this.props.fetchData(nextProps.location.pathname);
        }
        
    }

    addToBasket = (orderId, quantity) => {
        console.log(orderId);
        this.props.addOrderToBasket(orderId, quantity);

    }

    getUserUrl() {
        const url = this.props.location.pathname;

        
    }

    render() {
        const { isLoading, data } = this.props;
        if (isLoading || !data) {
            return <span> show spinner!!!</span>
        }
        // if (!data) return null;
        console.log('data', data);
        console.log('this.props.location', this.props.location);
        const {subMenu, categoriesList} = data;
        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>sub-menu!!!</h1>   
                    <ul className="sub-menu">
                    {
                      subMenu.map(itemMenu => (
                          <li key={itemMenu.url}>
                              <Link to={itemMenu.url}>
                                <i className={itemMenu.icon}></i>  
                                {itemMenu.title}
                              </Link>                             
                          </li>
                      ))  
                    }    
                    </ul> 
                                
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
    fetchData: (url) => fetchData(url),
    

};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
