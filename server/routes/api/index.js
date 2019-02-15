import { Router } from 'express';
import catalog from './catalog';
import goods from './goods';

const apiRouter = Router();
apiRouter.use('/catalog', catalog);
apiRouter.use('/goods', goods);

export default apiRouter;
