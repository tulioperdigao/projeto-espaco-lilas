import { ApiProperty } from '@nestjs/swagger'
import { Gender } from '@prisma/client'
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class PatientsRequestCreateDto {
  constructor(partial?: Partial<PatientsRequestCreateDto>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ description: 'Patient name' })
  @IsString()
  @IsNotEmpty()
  name!: string

  @ApiProperty({ description: 'Patient cpf' })
  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(14)
  cpf!: string

  @ApiProperty({ description: 'Patient email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @ApiProperty({ description: 'Patient phone number' })
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phoneNumber!: string

  @ApiProperty({ description: 'Patient date of birth' })
  @IsDateString()
  @IsNotEmpty()
  birthDate!: string

  @ApiProperty({ description: 'Patient gender', enum: Gender, example: Gender.M, required: false })
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender

  @ApiProperty({ description: 'Patient observations', required: false })
  @IsString()
  @IsOptional()
  observations?: string
}
