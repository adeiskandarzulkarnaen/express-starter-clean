import { Router } from 'express';
import { Container } from 'instances-container';
import AuthHandler from './handler';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = (handler: AuthHandler, container: Container): Router => {
  const router = Router();

  router.post('/authentications', ...handler.postAuthHandlers);

  return router;
};

export default routes;
