import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.appointment.findMany({
      include: {
        patient: true,
        professional: true,
        procedure: true,
      },
      orderBy: {
        startAt: 'asc',
      },
    })
  }

  async findAllByPatient(patientId: string) {
    return this.prisma.appointment.findMany({
      where: {
        patientId,
      },
      include: {
        professional: true,
        procedure: true,
      },
      orderBy: {
        startAt: 'asc',
      },
    })
  }

  async findAllByProfessional(professionalId: string) {
    return this.prisma.appointment.findMany({
      where: {
        professionalId,
      },
      include: {
        patient: true,
        procedure: true,
      },
      orderBy: {
        startAt: 'asc',
      },
    })
  }

  async findOneByProfessionalId(professionalId: string, appointmentId: string) {
    return this.prisma.appointment.findFirst({
      where: {
        professionalId,
        id: appointmentId,
      },
      include: {
        patient: true,
        procedure: true,
      },
    })
  }

  async findOneByPatientId(patientId: string, appointmentId: string) {
    return this.prisma.appointment.findFirst({
      where: {
        patientId,
        id: appointmentId,
      },
      include: {
        professional: true,
        procedure: true,
      },
    })
  }

  async findById(patientId: string, professionalId: string, appointmentId: string) {
    return this.prisma.appointment.findFirst({
      where: {
        professionalId,
        patientId,
        id: appointmentId,
      },
    })
  }

  async create(patientId: string, professionalId: string, data: any) {
    return this.prisma.appointment.create({
      data: {
        ...data,
        patientId,
        professionalId,
      },
    })
  }

  async update(patientId: string, professionalId: string, appointmentId: string, data: any) {
    return this.prisma.appointment.update({
      where: {
        id: appointmentId,
        patientId,
        professionalId,
      },
      data,
    })
  }

  async delete(patientId: string, professionalId: string, appointmentId: string) {
    await this.prisma.appointment.delete({
      where: {
        id: appointmentId,
        patientId,
        professionalId,
      },
    })
  }
}
