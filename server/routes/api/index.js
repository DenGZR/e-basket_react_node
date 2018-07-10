import { Router } from 'express';
import catalog from './catalog';

const apiRouter = Router();
apiRouter.use('/catalog', catalog);

export default apiRouter;
