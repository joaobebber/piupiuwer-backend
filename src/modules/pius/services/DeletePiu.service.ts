// Repository Interface
import IPiusRepository from '../repositories/IPiusRepository';

class DeletePiuService {
  private piusRepository: IPiusRepository;

  constructor(piusRepository: IPiusRepository) {
    this.piusRepository = piusRepository;
  }

  public execute(id: string) {
    return this.piusRepository.delete(id);
  }
}

export default DeletePiuService;
