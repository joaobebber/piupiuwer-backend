// Model
import User from '@models/User';

// Application Error
import AppError from '@shared/errors/AppError';

// Repository Interface
import IUsersRepository from '../repositories/IUsersRepository';

class ReadUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute(id: string): User | User[] {
    if (id) {
      const user = this.usersRepository.findById(id);

      if (!user) throw new AppError('User not found.', 404);

      return user;
    }

    return this.usersRepository.read();
  }
}

export default ReadUserService;
