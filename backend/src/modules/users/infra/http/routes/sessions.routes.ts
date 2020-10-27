import { Router } from 'express';

import SessionService from '@modules/users/services/SessionService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const sessionService = new SessionService(usersRepository);

  const { user, token } = await sessionService.execute({ email, password });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
