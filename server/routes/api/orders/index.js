import { Router } from 'express';
import {
    getOrders,
    getOrdersDetails,
} from '../../../controllers/api/getOrders';
import createOrders from '../../../controllers/api/createOrders';
const ordersRouter = Router();

ordersRouter.get('/', getOrders);
ordersRouter.get('/:orderId', getOrdersDetails);
ordersRouter.post('/', createOrders);

export default ordersRouter;
