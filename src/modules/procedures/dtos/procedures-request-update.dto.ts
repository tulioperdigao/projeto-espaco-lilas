import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class ProceduresRequestUpdateDto {
  constructor(partial?: Partial<ProceduresRequestUpdateDto>) {
    Object.assign(this, partial)
  }

  @ApiPropertyOptional({ description: 'Procedure name' })
  @IsString()
  @IsOptional()
  name?: string

  @ApiPropertyOptional({ description: 'Procedure description' })
  @IsString()
  @IsOptional()
  description?: string

  @ApiPropertyOptional({ description: 'Procedure duration in minutes' })
  @IsNumber()
  @IsOptional()
  durationInMinutes?: number

  @ApiPropertyOptional({ description: 'Procedure price' })
  @IsNumber()
  @IsOptional()
  price?: number
}
