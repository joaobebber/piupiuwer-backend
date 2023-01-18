// Model
import User from '@models/User';

// Application Error
import AppError from '@shared/errors/AppError';

// Data Transfer Objects
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

// Repository Interface
import IUsersRepository from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  // CRUD methods
  public create({
    name, birthday, cpf, phone,
  }: ICreateUserDTO): User {
    const user = new User({
      name, birthday, cpf, phone,
    });

    this.users.push(user);

    return user;
  }

  public read(): User[] {
    return this.users;
  }

  public update({
    id, name, birthday, phone,
  }: IUpdateUserDTO): User {
    const userIndex = this.findIndexById(id);

    if (userIndex < 0) throw new AppError('User not found.', 404);

    const oldUser = this.users.splice(userIndex, 1);

    const updatedUser: User = {
      id: oldUser[0].id,
      name,
      birthday,
      cpf: oldUser[0].cpf,
      phone,
      created_at: oldUser[0].created_at,
      updated_at: new Date(),
    };

    this.users.push(updatedUser);

    return updatedUser;
  }

  public delete(id: string): User {
    const userIndex = this.findIndexById(id);

    if (userIndex < 0) throw new AppError('User not found.', 404);

    const oldUser = this.users.splice(userIndex, 1);

    return oldUser[0];
  }

  // Search methods
  public findByCpf(cpf: string): User | null {
    return this.users.find((user) => user.cpf === cpf) || null;
  }

  public findIndexById(id: string): number {
    return this.users.findIndex((user) => user.id === id);
  }
}

export default UsersRepository;
