import { Controller, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserEmailDto } from './dto/update-user-email.dto';

@Controller('users') // Define o prefixo da rota para '/users'
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // Rota: POST /users
  create(@Body() createUserDto: CreateUserDto) {
    // O @Body extrai o corpo da requisição e o ValidationPipe o valida contra o DTO.
    return this.usersService.create(createUserDto);
  }

  @Put(':id/email') // Rota: PUT /users/{id}/email
  updateEmail(
    @Param('id') id: string,
    @Body() updateUserEmailDto: UpdateUserEmailDto,
  ) {
    return this.usersService.updateEmail(id, updateUserEmailDto);
  }
}
