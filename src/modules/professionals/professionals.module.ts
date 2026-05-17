import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ProfessionalsController } from './controller'
import { ProfessionalsService } from './services'

@Module({
  controllers: [ProfessionalsController],
  providers: [ProfessionalsService, PrismaService],
})
export class ProfessionalsModule {}
