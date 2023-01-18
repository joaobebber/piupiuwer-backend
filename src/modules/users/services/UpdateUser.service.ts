// Application Error
import AppError from '@shared/errors/AppError';

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
    if (!name || !birthday || !phone) {
      throw new AppError('All fields must have a valid information.');
    }

    return this.usersRepository.update({
      id, name, birthday, phone,
    });
  }
}

export default UpdateUserService;
