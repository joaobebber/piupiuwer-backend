// Application Error
import AppError from '@shared/errors/AppError';

// External Repository Interface
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

// Data Transfer Object
import IUpdatePiuDTO from '../dtos/IUpdatePiuDTO';

// Repository Interface
import IPiusRepository from '../repositories/IPiusRepository';

interface IConstruct {
  piusRepository: IPiusRepository;
  usersRepository: IUsersRepository;
}

class UpdatePiuService {
  private piusRepository: IPiusRepository;

  private usersRepository: IUsersRepository;

  constructor({ piusRepository, usersRepository }: IConstruct) {
    this.piusRepository = piusRepository;
    this.usersRepository = usersRepository;
  }

  public execute({ id, text }: IUpdatePiuDTO) {
    const oldPiu = this.piusRepository.findById(id);

    if (!text) throw new AppError('All fields must have a valid information.');

    if (text.length < 140) {
      throw new AppError('Text must have less than 140 chars.');
    }

    const user = this.usersRepository.findById(oldPiu?.user_id as string);

    if (!user) throw new AppError('User not found.', 404);

    return this.piusRepository.update({ id, text });
  }
}

export default UpdatePiuService;
