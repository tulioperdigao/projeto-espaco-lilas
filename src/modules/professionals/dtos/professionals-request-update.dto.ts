import { ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class ProfessionalsRequestUpdateDto {
  constructor(partial?: Partial<ProfessionalsRequestUpdateDto>) {
    Object.assign(this, partial)
  }

  @ApiPropertyOptional({ description: 'Professional name' })
  @IsString()
  @IsOptional()
  name?: string

  @ApiPropertyOptional({ description: 'Professional cpf' })
  @IsString()
  @IsOptional()
  @MinLength(11)
  @MaxLength(14)
  cpf?: string

  @ApiPropertyOptional({ description: 'Professional email' })
  @IsEmail()
  @IsOptional()
  email?: string

  @ApiPropertyOptional({ description: 'Professional phone number' })
  @IsPhoneNumber('BR')
  @IsOptional()
  phoneNumber?: string

  @ApiPropertyOptional({ description: 'Professional date of birth' })
  @IsDateString()
  @IsOptional()
  birthDate?: string

  @ApiPropertyOptional({ description: 'Professional specialty' })
  @IsString()
  @IsOptional()
  specialty?: string
}
