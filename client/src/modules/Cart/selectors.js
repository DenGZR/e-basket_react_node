import { sumBy, chain } from 'lodash';

// selectors
export const getOrdersCount = state => sumBy(state.cart.orders, 'quantity');
export const getOrdersTotal = state => chain(state.cart.orders)
    .reduce((sum, order) => {
        const { quantity, price } = order;
        return sum + quantity*price;
    }, 0)
    .value();