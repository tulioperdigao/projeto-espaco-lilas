import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProceduresService } from '../services'

@Controller({
  version: '1',
  path: 'procedures',
})
export class ProceduresController {
  constructor(private readonly proceduresService: ProceduresService) {}

  @Get()
  findAll() {
    return this.proceduresService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.proceduresService.findById(id)
  }

  @Post()
  create(@Body() data: any) {
    return this.proceduresService.create(data)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.proceduresService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proceduresService.delete(id)
  }
}
