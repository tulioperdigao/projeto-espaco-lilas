import { ApiProperty } from '@nestjs/swagger'
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class ProfessionalsRequestCreateDto {
  constructor(partial?: Partial<ProfessionalsRequestCreateDto>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ description: 'Professional name' })
  @IsString()
  @IsNotEmpty()
  name!: string

  @ApiProperty({ description: 'Professional cpf' })
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(14)
  cpf!: string

  @ApiProperty({ description: 'Professional email' })
  @IsEmail()
  @IsNotEmpty()
  email!: string

  @ApiProperty({ description: 'Professional phone number' })
  @IsPhoneNumber('BR')
  @IsNotEmpty()
  phoneNumber!: string

  @ApiProperty({ description: 'Professional date of birth' })
  @IsDateString()
  @IsNotEmpty()
  birthDate!: string

  @ApiProperty({ description: 'Professional specialty', required: false })
  @IsString()
  @IsOptional()
  specialty?: string
}
