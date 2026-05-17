import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ProfessionalsRequestCreateDto, ProfessionalsRequestUpdateDto } from '../dtos'

@Injectable()
export class ProfessionalsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.professional.findMany()
  }

  findById(id: string) {
    return this.prisma.professional.findFirst({
      where: {
        id,
      },
    })
  }

  create(data: ProfessionalsRequestCreateDto) {
    return this.prisma.professional.create({
      data: {
        ...data,
        birthDate: new Date(data.birthDate),
      },
    })
  }

  update(id: string, data: ProfessionalsRequestUpdateDto) {
    return this.prisma.professional.update({
      where: {
        id,
      },
      data: {
        ...data,
        birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
      },
    })
  }

  delete(id: string) {
    return this.prisma.professional.delete({
      where: {
        id,
      },
    })
  }
}
