import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UserRepositories";
import { FindOneOptions, getCustomRepository } from "typeorm";


interface IUserRequest{
  name: string;
  email: string;
  admin?: boolean

}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);

    if(!email){
      throw new Error("Email incorrect")
    }

    const findOptions: FindOneOptions<User> = {
      where: {
        email: email
      }
    };
    const UserAlreadyExists = await userRepository.findOne(findOptions);
    
    if(UserAlreadyExists){
      throw new Error("User already exists")
    }

    const user = userRepository.create({
      name,
      email,
      admin
    })

    await userRepository.save(user);

    return user;

  }
}


export {CreateUserService}
