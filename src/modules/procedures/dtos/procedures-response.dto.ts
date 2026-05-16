import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ProceduresResponseDto {
  constructor(partial: Partial<ProceduresResponseDto>) {
    Object.assign(this, partial)
  }

  @ApiProperty({ description: 'Procedure id' })
  @IsString()
  @IsNotEmpty()
  id!: string

  @ApiProperty({ description: 'Procedure name' })
  @IsString()
  @IsNotEmpty()
  name!: string

  @ApiProperty({ description: 'Procedure description', required: false })
  @IsString()
  description!: string

  @ApiProperty({ description: 'Procedure duration in minutes' })
  @IsNumber()
  @IsNotEmpty()
  durationInMinutes!: number

  @ApiProperty({ description: 'Procedure price' })
  @IsNumber()
  @IsNotEmpty()
  price!: number

  @ApiProperty({ description: 'Procedure creation date', format: 'date-time' })
  createdAt!: string

  @ApiProperty({ description: 'Procedure update date', format: 'date-time' })
  updatedAt!: string
}
