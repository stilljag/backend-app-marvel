import { Router } from 'express';

import CharacterController from './app/controllers/CharacterController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/characters', CharacterController.index);

routes.get('/characters/:nameStartsWith', CharacterController.show);

export default routes;
