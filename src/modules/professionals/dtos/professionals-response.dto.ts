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

export class ProfessionalsResponseDto {
  constructor(partial?: Partial<ProfessionalsResponseDto>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ description: 'Professional id' })
  @IsString()
  @IsNotEmpty()
  id!: string

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

  @ApiProperty({ description: 'Professional creation date', format: 'date-time' })
  createdAt!: string

  @ApiProperty({ description: 'Professional update date', format: 'date-time' })
  updatedAt!: string
}
