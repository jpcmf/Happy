import { container } from 'tsyringe';

import IOrphanagesRepository from '@modules/orphanages/repositories/IOrphanagesRepository';
import OrphanagesRepository from '@modules/orphanages/infra/typeorm/repositories/OrphanagesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IOrphanagesRepository>(
  'OrphanagesRepository',
  OrphanagesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
