import { Router } from 'express';
import getJson from '../../../controllers/api/getJson';

const xlsxRouter = Router();

xlsxRouter.get('/', getJson);

export default xlsxRouter;