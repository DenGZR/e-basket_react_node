import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toggleVisibilityCartModal, removeOrderFromCart } from '../../../modules/Cart/actions';
import { getOrdersCount, getOrdersTotal } from '../../../modules/Cart/selectors';
import CartOrderList from '../../CartOrderList';

class CartModal extends Component {

  goToCheckout = () => {
    this.props.toggleVisibilityCartModal();
    this.props.history.push('/checkout');
  }

  toggle = () => {
    this.props.toggleVisibilityCartModal();
  }

  removeOrderItem = order => {
    this.props.removeOrderFromCart(order);
  }

  render() {
    const { isShow, orders, ordersCount, ordersTotal } = this.props;
    return (
        <Modal isOpen={isShow} toggle={this.toggle} className="cart-modal">
            <ModalHeader toggle={this.toggle}>Ваш заказ</ModalHeader>
            <ModalBody>
                <CartOrderList removeItem={this.removeOrderItem} orders={orders}/>
                <p>{`Товар(ов): ${ordersCount}`}</p>
                <p>{`Итого: ${ordersTotal}`}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.goToCheckout}>Оформить заказ</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Закрыть</Button>
            </ModalFooter>
        </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
    isShow: state.cart.isShowModal,
    orders: state.cart.orders,
    ordersCount: getOrdersCount(state),
    ordersTotal: getOrdersTotal(state),
});

const mapDispatchToProps = {
    toggleVisibilityCartModal: () => toggleVisibilityCartModal(),
    removeOrderFromCart: order => removeOrderFromCart(order),
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartModal));


