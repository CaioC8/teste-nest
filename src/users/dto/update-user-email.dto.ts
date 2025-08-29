import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserEmailDto {
  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  @IsEmail({}, { message: 'Forneça um email válido.' })
  email: string;
}
