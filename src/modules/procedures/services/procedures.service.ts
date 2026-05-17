import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ProceduresRequestCreateDto, ProceduresRequestUpdateDto } from '../dtos'

@Injectable()
export class ProceduresService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.procedure.findMany()
  }

  findById(id: string) {
    return this.prisma.procedure.findFirst({
      where: {
        id,
      },
    })
  }

  create(data: ProceduresRequestCreateDto) {
    return this.prisma.procedure.create({
      data,
    })
  }

  update(id: string, data: ProceduresRequestUpdateDto) {
    return this.prisma.procedure.update({
      where: {
        id,
      },
      data,
    })
  }

  delete(id: string) {
    return this.prisma.procedure.delete({
      where: {
        id,
      },
    })
  }
}
