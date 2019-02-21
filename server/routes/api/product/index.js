import { Router } from 'express';
import { getProduct } from '../../../controllers/api/getProduct';

const productRouter = Router();

productRouter.get('/:productName', getProduct);

export default productRouter;
