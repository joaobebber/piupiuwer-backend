// Data Transfer Object
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

// Repository Interface
import IUsersRepository from '../repositories/IUsersRepository';

class UpdateUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({
    id, name, birthday, phone,
  }: IUpdateUserDTO) {
    const user = this.usersRepository.update({
      id, name, birthday, phone,
    });

    return user;
  }
}

export default UpdateUserService;
