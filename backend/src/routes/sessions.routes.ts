import { Router } from 'express';
import SessionService from '../services/SessionService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const sessionService = new SessionService();

    const { user } = await sessionService.execute({ email, password });

    delete user.password;

    return response.json({ user });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
