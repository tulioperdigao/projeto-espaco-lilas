import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PatientsController } from './controller'
import { PatientsService } from './services'

@Module({
  controllers: [PatientsController],
  providers: [PatientsService, PrismaService],
})
export class PatientsModule {}
