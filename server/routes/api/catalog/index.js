import { Router } from 'express';
import getCatalog from '../../../controllers/api/getCatalog';

const catalogRouter = Router();

// catalogRouter.get('/', getCatalog);
catalogRouter.post('/', getCatalog);

export default catalogRouter;
