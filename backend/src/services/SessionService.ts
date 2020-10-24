import { getRepository } from 'typeorm';
import { compare } from 'bcrypt';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
}

class SessionsService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Incorrect e-mail/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect e-mail/password combination.');
    }

    // const hashPassword = await hash(password, 8);
    // const user = usersRepository.create({
    //   name,
    //   email,
    //   password: hashPassword,
    // });
    // await usersRepository.save(user);

    return { user };
  }
}

export default SessionsService;
