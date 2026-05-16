import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class ProceduresRequestUpdateDto {
  constructor(partial: Partial<ProceduresRequestUpdateDto>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ description: 'Procedure name', required: false })
  @IsString()
  @IsOptional()
  name?: string

  @ApiProperty({ description: 'Procedure description', required: false })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ description: 'Procedure duration in minutes', required: false })
  @IsNumber()
  @IsOptional()
  durationInMinutes?: number

  @ApiProperty({ description: 'Procedure price', required: false })
  @IsNumber()
  @IsOptional()
  price?: number
}
