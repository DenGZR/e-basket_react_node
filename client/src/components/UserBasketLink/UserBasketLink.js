import React from 'react';
import { connect } from 'react-redux';
import BasketIcon from '../../assets/svg/shopping-basket.svg'

const userBasketLink = () => {

    return (
        <div>
            <img src={BasketIcon} alt="BasketIcon"/>

        </div>
    )
};

const mapStateToProps = (state) => ({
    selectedId: state.basket.selectedId,
});

export default connect(mapStateToProps)(userBasketLink);