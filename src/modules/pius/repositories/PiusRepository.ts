// Model
import Piu from '@models/Piu';

// Application Error
import AppError from '@shared/errors/AppError';

// Data Transfer Objects
import ICreatePiuDTO from '../dtos/ICreatePiuDTO';
import IUpdatePiuDTO from '../dtos/IUpdatePiuDTO';

// Repository Interface
import IPiusRepository from './IPiusRepository';

class PiusRepository implements IPiusRepository {
  private pius: Piu[];

  constructor() {
    this.pius = [];
  }

  // CRUD methods
  public create({ user_id, text }: ICreatePiuDTO): Piu {
    const piu = new Piu({ user_id, text });

    this.pius.push(piu);

    return piu;
  }

  public read(): Piu[] {
    return this.pius;
  }

  public update({ id, text }: IUpdatePiuDTO): Piu {
    const piuIndex = this.findIndexById(id);

    if (piuIndex < 0) throw new AppError('Piu not found.', 404);

    const oldPiu = this.pius.splice(piuIndex, 1);

    const updatedPiu: Piu = {
      id: oldPiu[0].id,
      user_id: oldPiu[0].user_id,
      text,
      created_at: oldPiu[0].created_at,
      updated_at: new Date(),
    };

    this.pius.push(updatedPiu);

    return updatedPiu;
  }

  public delete(id: string): Piu {
    const piuIndex = this.findIndexById(id);

    if (piuIndex < 0) throw new AppError('Piu not found.', 404);

    const oldPiu = this.pius.splice(piuIndex, 1);

    return oldPiu[0];
  }

  // Search methods
  public findById(id: string): Piu | null {
    return this.pius.find((piu) => piu.id === id) || null;
  }

  public findIndexById(id: string): number {
    return this.pius.findIndex((piu) => piu.id === id);
  }
}

export default PiusRepository;
