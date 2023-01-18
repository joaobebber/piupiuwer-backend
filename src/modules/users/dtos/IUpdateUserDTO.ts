// Data Transfer Object to update User

interface IUpdateUserDTO {
  id: string;
  name: string;
  birthday: Date;
  phone: string;
}

export default IUpdateUserDTO;
