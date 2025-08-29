import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Torna a entidade User e seu repositório padrão disponíveis neste módulo
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository], // Registra o serviço e nosso repositório customizado
})
export class UsersModule {}
