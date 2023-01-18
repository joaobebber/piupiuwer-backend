// Model
import Piu from '@models/Piu';

// Application Error
import AppError from '@shared/errors/AppError';

// External Repository Interface
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

// Repository Interface
import IPiusRepository from '../repositories/IPiusRepository';

interface IConstruct {
  piusRepository: IPiusRepository;
  usersRepository: IUsersRepository;
}

interface IRequest {
  user_id: string;
  text: string;
}

class CreatePiuService {
  private piusRepository: IPiusRepository;

  private usersRepository: IUsersRepository;

  constructor({ piusRepository, usersRepository }: IConstruct) {
    this.piusRepository = piusRepository;
    this.usersRepository = usersRepository;
  }

  public execute({ user_id, text }: IRequest): Piu {
    if (!user_id || !text) {
      throw new AppError('All fields must have a valid information.');
    }

    if (text.length < 140) {
      throw new AppError('Text must have less than 140 chars.');
    }

    const user = this.usersRepository.findById(user_id);

    if (!user) throw new AppError('User not found.', 404);

    return this.piusRepository.create({ user_id, text });
  }
}

export default CreatePiuService;
