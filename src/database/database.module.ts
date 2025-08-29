import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // <-- Seu usuário do Postgres
      password: 'mysecretpassword', // <-- Sua senha do Postgres
      database: 'nest_api_users', // <-- O banco de dados que você criou
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Encontra as entidades automaticamente
      synchronize: true, // CUIDADO: Em produção, use migrations. Em dev, `true` cria/atualiza as tabelas automaticamente.
    }),
  ],
})
export class DatabaseModule {}
