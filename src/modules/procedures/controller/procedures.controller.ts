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
  ProceduresRequestCreateDto,
  ProceduresRequestUpdateDto,
  ProceduresResponseDto,
} from '../dtos'
import { ProceduresService } from '../services'

@Controller({
  version: '1',
  path: 'procedures',
})
export class ProceduresController {
  constructor(private readonly proceduresService: ProceduresService) {}

  @Get()
  @ApiResponse({
    type: [ProceduresResponseDto],
  })
  findAll() {
    return this.proceduresService.findAll()
  }

  @Get(':id')
  @ApiResponse({
    type: ProceduresResponseDto,
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.proceduresService.findById(id)
  }

  @Post()
  @ApiResponse({
    type: ProceduresResponseDto,
  })
  create(@Body() data: ProceduresRequestCreateDto) {
    return this.proceduresService.create(data)
  }

  @Put(':id')
  @ApiResponse({
    type: ProceduresResponseDto,
  })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: ProceduresRequestUpdateDto) {
    return this.proceduresService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.proceduresService.delete(id)
  }
}
