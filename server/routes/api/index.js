import { Router } from 'express';
import login from './login';
import orders from './orders';
import xlsxToJson from './xlsxToJson';

const apiRouter = Router();

apiRouter.use('/xlsx', xlsxToJson);
apiRouter.use('/login', login);
apiRouter.use('/orders', orders);

export default apiRouter;
