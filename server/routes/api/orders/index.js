import { Router } from 'express';
import getAuth from '../../../controllers/api/getAuth';

const loginRouter = Router();

loginRouter.post('/', getAuth);

export default loginRouter;
