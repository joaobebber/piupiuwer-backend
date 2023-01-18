// Model
import User from '@models/User';

// Data Transfer Objects
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

interface IUsersRepository {
  // CRUD methods
  create(data: ICreateUserDTO): User;
  read(): User[];
  update(data: IUpdateUserDTO): User;
  delete(id: string): User;

  // Search methods
  findByCpf(cpf: string): User | null;
  findById(id: string): User | null;
  findIndexById(id: string): number | null;
}

export default IUsersRepository;
