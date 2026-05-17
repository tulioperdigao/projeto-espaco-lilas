import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { PatientsRequestCreateDto, PatientsRequestUpdateDto, PatientsResponseDto } from '../dtos'
import { PatientsService } from '../services'

@Controller({
  version: '1',
  path: 'patients',
})
export class PatientsController {
  constructor(private readonly patientService: PatientsService) {}

  @Get()
  @ApiResponse({
    type: [PatientsResponseDto],
  })
  findAll() {
    return this.patientService.findAll()
  }

  @Get(':id')
  @ApiResponse({
    type: PatientsResponseDto,
  })
  findOne(@Param('id') id: string) {
    return this.patientService.findById(id)
  }

  @Post()
  @ApiResponse({
    type: PatientsResponseDto,
  })
  create(@Body() data: PatientsRequestCreateDto) {
    return this.patientService.create(data)
  }

  @Put(':id')
  @ApiResponse({
    type: PatientsResponseDto,
  })
  update(@Param('id') id: string, @Body() data: PatientsRequestUpdateDto) {
    return this.patientService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.patientService.delete(id)
  }
}
