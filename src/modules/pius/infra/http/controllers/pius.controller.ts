import { Request, Response } from 'express';

// Repository
import PiusRepository from '@modules/pius/repositories/PiusRepository';
import { usersRepository } from '@modules/users/infra/http/controllers/users.controller';

// Services
import CreatePiuService from '@modules/pius/services/CreatePiu.service';
import ReadPiuService from '@modules/pius/services/ReadPiu.service';
import UpdatePiuService from '@modules/pius/services/UpdatePiu.service';
import DeletePiuService from '@modules/pius/services/DeletePiu.service';

export const piusRepository = new PiusRepository();

class PiusController {
  // CRUD requests
  public async create(request: Request, response: Response) {
    const { user_id, text } = request.body;

    const createPiu = new CreatePiuService({ piusRepository, usersRepository });

    const piu = createPiu.execute({ user_id, text });

    return response.status(201).json(piu);
  }

  public async read(request: Request, response: Response) {
    const { id } = request.query;

    const readPiu = new ReadPiuService(piusRepository);

    const pius = readPiu.execute(id as string);

    return response.json(pius);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.query;

    const { text } = request.body;

    const updatePiu = new UpdatePiuService(piusRepository);

    const piu = updatePiu.execute({
      id: id as string,
      text,
    });

    return response.json(piu);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.query;

    const deletePiu = new DeletePiuService(piusRepository);

    const piu = deletePiu.execute(id as string);

    return response.json(piu);
  }
}

export default PiusController;
