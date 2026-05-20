import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ProfessionalsRequestCreateDto, ProfessionalsRequestUpdateDto } from '../dtos'

@Injectable()
export class ProfessionalsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.professional.findMany({
      where: {
        isActive: true,
      },
    })
  }

  findById(id: string) {
    return this.prisma.professional.findFirst({
      where: {
        id,
        isActive: true,
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

  async update(id: string, data: ProfessionalsRequestUpdateDto) {
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

  async delete(id: string) {
    await this.prisma.professional.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    })

    return {
      message: 'Professional deleted successfuly.',
    }
  }
}
