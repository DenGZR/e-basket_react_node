import { Router } from 'express';
import getOrders from '../../../controllers/api/getOrders';
import createOrders from '../../../controllers/api/createOrders';
const ordersRouter = Router();

ordersRouter.get('/', getOrders);
ordersRouter.post('/', createOrders);

export default ordersRouter;
