// Model
import Piu from '@models/Piu';

// Application Error
import AppError from '@shared/errors/AppError';

// Repository Interface
import IPiusRepository from '../repositories/IPiusRepository';

class ReadPiuService {
  private piusRepository: IPiusRepository;

  constructor(piusRepository: IPiusRepository) {
    this.piusRepository = piusRepository;
  }

  public execute(id: string): Piu | Piu[] {
    if (id) {
      const piu = this.piusRepository.findById(id);

      if (!piu) throw new AppError('Piu not found.', 404);

      return piu;
    }

    return this.piusRepository.read();
  }
}

export default ReadPiuService;
