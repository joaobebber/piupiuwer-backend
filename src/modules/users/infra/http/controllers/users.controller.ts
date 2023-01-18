import { Request, Response } from 'express';
import { parseISO } from 'date-fns';

// Repository
import UsersRepository from '@modules/users/repositories/UsersRepository';

// Services
import CreateUserService from '@modules/users/services/CreateUser.service';
import ReadUserService from '@modules/users/services/ReadUser.service';
import UpdateUserService from '@modules/users/services/UpdateUser.service';
import DeleteUserService from '@modules/users/services/DeleteUser.service';

const usersRepository = new UsersRepository();

class UsersController {
  // CRUD requests
  public async create(request: Request, response: Response) {
    const {
      name, birthday, cpf, phone,
    } = request.body;

    const parsedBirthday = parseISO(birthday);

    const createUser = new CreateUserService(usersRepository);

    const user = createUser.execute({
      name,
      birthday: parsedBirthday,
      cpf,
      phone,
    });

    return response.status(201).json(user);
  }

  public async read(_request: Request, response: Response) {
    const readUser = new ReadUserService(usersRepository);

    const users = readUser.execute();

    return response.json(users);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.query;

    const { name, birthday, phone } = request.body;

    const parsedBirthday = parseISO(birthday);

    const updateUser = new UpdateUserService(usersRepository);

    const user = updateUser.execute({
      id: id as string,
      name,
      birthday: parsedBirthday,
      phone,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.query;

    const deleteUser = new DeleteUserService(usersRepository);

    const user = deleteUser.execute(id as string);

    return response.json(user);
  }
}

export default UsersController;
