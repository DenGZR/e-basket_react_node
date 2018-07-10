import { Router } from 'express';
import { getOrders } from '../../../controllers/api/orders';

const ordersRouter = Router();

ordersRouter.get('/', getOrders);

export default ordersRouter;
