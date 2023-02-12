import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {
  save: any;
  create(arg0: { name: string; email: string; admin: boolean; }) {
    throw new Error("Method not implemented.");
  }
  findOne: any;
}

export { UsersRepositories };