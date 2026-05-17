import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import {
  ProfessionalsRequestCreateDto,
  ProfessionalsRequestUpdateDto,
  ProfessionalsResponseDto,
} from '../dtos'
import { ProfessionalsService } from '../services'

@Controller({
  version: '1',
  path: 'professionals',
})
export class ProfessionalsController {
  constructor(private readonly professionalService: ProfessionalsService) {}

  @Get()
  @ApiResponse({
    type: [ProfessionalsResponseDto],
  })
  findAll() {
    return this.professionalService.findAll()
  }

  @Get(':id')
  @ApiResponse({
    type: ProfessionalsResponseDto,
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.professionalService.findById(id)
  }

  @Post()
  @ApiResponse({
    type: ProfessionalsResponseDto,
  })
  create(@Body() data: ProfessionalsRequestCreateDto) {
    return this.professionalService.create(data)
  }

  @Put(':id')
  @ApiResponse({
    type: ProfessionalsResponseDto,
  })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: ProfessionalsRequestUpdateDto) {
    return this.professionalService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.professionalService.delete(id)
  }
}
