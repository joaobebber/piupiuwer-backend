// Repository Interface
import IUsersRepository from '../repositories/IUsersRepository';

class ReadUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute() {
    const user = this.usersRepository.read();

    return user;
  }
}

export default ReadUserService;
