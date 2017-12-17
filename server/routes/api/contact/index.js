import { Router } from 'express';
import getContact from '../../../controllers/api/getContact';

const contactRouter = Router();

contactRouter.get('/', getContact);

export default contactRouter;
