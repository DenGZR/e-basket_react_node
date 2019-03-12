import React from 'react';
import { connect } from 'react-redux';
import BasketIcon from '../../assets/svg/shopping-basket.svg'
import { toggleVisibilityCartModal } from '../../modules/Cart/actions';
import { getOrdersCount, getOrdersTotal } from '../../modules/Cart/selectors';

const userBasketLink = props => {
    const { ordersCount, ordersTotal } = props;

    const toggle = () => {
        props.toggleVisibilityCartModal()
    }
    
    return (
        <div onClick={toggle}>
            <img src={BasketIcon} alt="BasketIcon"/>
            <p>{ordersCount}</p>
            <p>{ordersTotal}</p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    ordersCount: getOrdersCount(state.cart.orders),
    ordersTotal: getOrdersTotal(state.cart.orders),
});

const mapDispatchToProps = {
    // fetchOrders: (id) => fetchOrders(id),
    toggleVisibilityCartModal: () => toggleVisibilityCartModal(),
};

export default connect(mapStateToProps, mapDispatchToProps)(userBasketLink);