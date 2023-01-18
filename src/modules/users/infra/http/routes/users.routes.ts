import { Router } from 'express';

// Controllers
import UsersController from '../controllers/users.controller';

const usersRoutes = Router();

const usersController = new UsersController();

// CRUD routes
usersRoutes.post('/', usersController.create);
usersRoutes.get('/', usersController.read);
usersRoutes.put('/', usersController.update);
usersRoutes.delete('/', usersController.delete);

export default usersRoutes;
