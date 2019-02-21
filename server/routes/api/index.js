import { Router } from 'express';
import product from './product';
import brands from './brands';

const apiRouter = Router();
apiRouter.use('/product', product);
apiRouter.use('/brands', brands);

export default apiRouter;
