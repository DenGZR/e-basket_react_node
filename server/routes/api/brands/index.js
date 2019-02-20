import { Router } from 'express';
import { getAllBrands, getBrand } from '../../../controllers/api/getBrands';

const brandsRouter = Router();

brandsRouter.get('/', getAllBrands);
brandsRouter.get('/:brandName', getBrand);

export default brandsRouter;