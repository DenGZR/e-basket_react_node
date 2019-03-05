import { Router } from 'express';
import brands from './brands';
import orders from './orders';

const apiRouter = Router();

apiRouter.use('/brands', brands);
apiRouter.use('/orders', orders);

export default apiRouter;
