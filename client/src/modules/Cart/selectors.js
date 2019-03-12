import { sumBy, chain } from 'lodash';

// selectors
export const getOrdersCount = orders => sumBy(orders, 'quantity');
export const getOrdersTotal = orders => chain(orders)
    .reduce((sum, order) => {
        const { quantity, price } = order;
        if (quantity*price) {
            return sum + quantity*price;
        }
        return sum;
    }, 0)
    .value();