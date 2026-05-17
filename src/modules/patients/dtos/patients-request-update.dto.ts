import { ApiPropertyOptional } from '@nestjs/swagger'
import { Gender } from '@prisma/client'
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class PatientsRequestUpdateDto {
  constructor(partial?: Partial<PatientsRequestUpdateDto>) {
    Object.assign(this, partial)
  }

  @ApiPropertyOptional({ description: 'Patient name' })
  @IsString()
  @IsOptional()
  name?: string

  @ApiPropertyOptional({ description: 'Patient cpf' })
  @IsString()
  @IsOptional()
  @MinLength(11)
  @MaxLength(14)
  cpf?: string

  @ApiPropertyOptional({ description: 'Patient email' })
  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string

  @ApiPropertyOptional({ description: 'Patient phone number' })
  @IsString()
  @IsOptional()
  @IsPhoneNumber('BR')
  phoneNumber?: string

  @ApiPropertyOptional({ description: 'Patient date of birth' })
  @IsDateString()
  @IsOptional()
  birthDate?: string

  @ApiPropertyOptional({ description: 'Patient gender', enum: Gender, example: Gender.M })
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender

  @ApiPropertyOptional({ description: 'Patient observations' })
  @IsString()
  @IsOptional()
  observations?: string
}
