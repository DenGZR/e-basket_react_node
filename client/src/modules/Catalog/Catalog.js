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
        if (isLoading || !data) {
            return <span> show spinner!!!</span>
        }
        // if (!data) return null;
        console.log('data', data);
        const {subMenu, categoriesList} = data;
        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <h1>sub-menu!!!</h1>   
                    <ul className="sub-menu">
                    {
                      subMenu.map(itemMenu => (
                          <li>
                              <a href={itemMenu.url}>
                                <i className={itemMenu.icon}></i>  
                                {itemMenu.title}
                              </a>
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
    fetchData: () => fetchData(),
    

};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
