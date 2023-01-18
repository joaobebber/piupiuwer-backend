import { Router } from 'express';

import piusRoutes from '@modules/pius/infra/http/routes/pius.routes';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/pius', piusRoutes);
routes.use('/users', usersRoutes);

export default routes;
