import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { AppointmentsController } from './controller'
import { AppointmentsService } from './services'

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService, PrismaService],
})
export class AppointmentsModule {}
