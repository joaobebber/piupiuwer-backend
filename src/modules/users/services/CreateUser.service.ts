// Model
import User from '@models/User';

// Application Error
import AppError from '@shared/errors/AppError';

// Repository Interface
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  birthday: Date;
  cpf: string;
  phone: string;
}

class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({
    name, birthday, cpf, phone,
  }: IRequest): User {
    const userWithSameCpf = this.usersRepository.findByCpf(cpf);

    if (userWithSameCpf) {
      throw new AppError('User with same CPF already exists.');
    }

    const user = this.usersRepository.create({
      name,
      birthday,
      cpf,
      phone,
    });

    return user;
  }
}

export default CreateUserService;
