// Repository Interface
import IUsersRepository from '../repositories/IUsersRepository';

class DeleteUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute(id: string) {
    const user = this.usersRepository.delete(id);

    return user;
  }
}

export default DeleteUserService;
