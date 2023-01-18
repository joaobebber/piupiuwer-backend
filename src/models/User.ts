import { uuid } from 'uuidv4';

interface IConstructDTO {
  name: string;
  birthday: Date;
  cpf: string;
  phone: string;
}

class User {
  id: string;

  name: string;

  birthday: Date;

  cpf: string;

  phone: string;

  created_at: Date;

  updated_at: Date;

  constructor({
    name, birthday, cpf, phone,
  }: IConstructDTO) {
    this.id = uuid();
    this.name = name;
    this.birthday = birthday;
    this.cpf = cpf;
    this.phone = phone;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export default User;
