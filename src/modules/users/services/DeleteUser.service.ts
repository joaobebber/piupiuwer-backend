// Repository Interface
import IUsersRepository from '../repositories/IUsersRepository';

class DeleteUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute(id: string) {
    return this.usersRepository.delete(id);
  }
}

export default DeleteUserService;
