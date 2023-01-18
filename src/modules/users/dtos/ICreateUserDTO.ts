// Data Transfer Object to create User

interface ICreateUserDTO {
  name: string;
  birthday: Date;
  cpf: string;
  phone: string;
}

export default ICreateUserDTO;
