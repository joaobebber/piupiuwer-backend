import { Router } from 'express';

// Controllers
import PiusController from '../controllers/pius.controller';

const piusRoutes = Router();

const piusController = new PiusController();

// CRUD routes
piusRoutes.post('/', piusController.create);
piusRoutes.get('/', piusController.read);
piusRoutes.put('/', piusController.update);
piusRoutes.delete('/', piusController.delete);

export default piusRoutes;
