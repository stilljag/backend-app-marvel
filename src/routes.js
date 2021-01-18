import { Router } from 'express';

import CharacterController from './app/controllers/CharacterController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/characters/:offset', CharacterController.show);

routes.get('/characters/search/:nameStartsWith', CharacterController.index);

export default routes;
