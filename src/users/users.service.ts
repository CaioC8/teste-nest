import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserEmailDto } from './dto/update-user-email.dto';

@Injectable()
export class UsersService {
  constructor(
    // Injeta nosso repositório customizado
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = hashedPassword;

    return this.usersRepository.save(user);
  }

  async updateEmail(
    id: string,
    updateUserEmailDto: UpdateUserEmailDto,
  ): Promise<User> {
    const user = await this.usersRepository.findOneById(id);

    if (!user) {
      throw new NotFoundException(`Usuário com o ID '${id}' não encontrado.`);
    }

    user.email = updateUserEmailDto.email;

    return this.usersRepository.save(user);
  }
}
