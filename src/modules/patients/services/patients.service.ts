import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PatientsRequestCreateDto, PatientsRequestUpdateDto } from '../dtos'

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.patient.findMany()
  }

  findById(id: string) {
    return this.prisma.patient.findFirst({
      where: {
        id,
      },
    })
  }

  create(data: PatientsRequestCreateDto) {
    return this.prisma.patient.create({
      data: {
        ...data,
        birthDate: new Date(data.birthDate),
      },
    })
  }

  update(id: string, data: PatientsRequestUpdateDto) {
    return this.prisma.patient.update({
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
    return this.prisma.patient.delete({
      where: {
        id,
      },
    })
  }
}
