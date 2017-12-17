import { Router } from 'express';
import contact from './contact';
import xlsxToJson from './xlsxToJson';

const apiRouter = Router();

apiRouter.use('/contact', contact);
apiRouter.use('/xlsx', xlsxToJson);

export default apiRouter;
