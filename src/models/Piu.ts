import { uuid } from 'uuidv4';

interface IConstructDTO {
  user_id: string;
  text: string;
}

class Piu {
  id: string;

  user_id: string;

  text: string;

  created_at: Date;

  updated_at: Date;

  constructor({ user_id, text }: IConstructDTO) {
    this.id = uuid();
    this.user_id = user_id;
    this.text = text;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export default Piu;
