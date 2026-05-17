import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ProceduresController } from './controller'
import { ProceduresService } from './services'

@Module({
  controllers: [ProceduresController],
  providers: [ProceduresService, PrismaService],
})
export class ProceduresModule {}
