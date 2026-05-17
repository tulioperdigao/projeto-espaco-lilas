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

  @ApiPropertyOptional({ description: 'Patient gender' })
  @IsString()
  @IsOptional()
  gender?: string

  @ApiPropertyOptional({ description: 'Patient observations' })
  @IsString()
  @IsOptional()
  observations?: string
}
