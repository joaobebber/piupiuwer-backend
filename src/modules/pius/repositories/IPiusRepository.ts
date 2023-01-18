// Model
import Piu from '@models/Piu';

// Data Transfer Objects
import ICreatePiuDTO from '../dtos/ICreatePiuDTO';
import IUpdatePiuDTO from '../dtos/IUpdatePiuDTO';

interface IPiusRepository {
  // CRUD methods
  create(data: ICreatePiuDTO): Piu;
  read(): Piu[];
  update(data: IUpdatePiuDTO): Piu;
  delete(id: string): Piu;

  // Search methods
  findById(id: string): Piu | null;
  findIndexById(id: string): number | null;
}

export default IPiusRepository;
