import { Router } from 'express';
import { getAllBrands, getBrand, getProduct } from '../../../controllers/api/getBrands';

const brandsRouter = Router();

brandsRouter.get('/', getAllBrands);
brandsRouter.get('/:brandName', getBrand);
brandsRouter.get('/:brandName/:productName', getProduct);

export default brandsRouter;