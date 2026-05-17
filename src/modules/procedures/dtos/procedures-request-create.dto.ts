import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class ProceduresRequestCreateDto {
  constructor(partial?: Partial<ProceduresRequestCreateDto>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ description: 'Procedure name' })
  @IsString()
  @IsNotEmpty()
  name!: string

  @ApiProperty({ description: 'Procedure description', required: false })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ description: 'Procedure duration in minutes' })
  @IsNumber()
  @IsNotEmpty()
  durationInMinutes!: number

  @ApiProperty({ description: 'Procedure price' })
  @IsNumber()
  @IsNotEmpty()
  price!: number
}
