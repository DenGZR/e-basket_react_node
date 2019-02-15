import { Router } from 'express';
import getGoods from '../../../controllers/api/getGoods';

const goodsRouter = Router();

goodsRouter.get('/', getGoods);

export default goodsRouter;