import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    // Injeta o repositório do TypeORM para a entidade User
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Método para salvar um usuário no banco
  async save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  // Método para encontrar um usuário pelo ID
  async findOneById(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
}
