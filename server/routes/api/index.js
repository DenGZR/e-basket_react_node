import { Router } from 'express';
import catalog from './catalog';
import brands from './brands';

const apiRouter = Router();
apiRouter.use('/catalog', catalog);
apiRouter.use('/brands', brands);

export default apiRouter;
