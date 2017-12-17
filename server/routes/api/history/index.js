import { Router } from 'express';
import getHistory from '../../../controllers/api/getHistory';

const historyRouter = Router();

historyRouter.get('/', getHistory);

export default historyRouter;
