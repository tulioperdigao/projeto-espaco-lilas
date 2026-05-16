import { Module } from '@nestjs/common'
import { ProceduresController } from './controller'
import { ProceduresService } from './services'

@Module({
  controllers: [ProceduresController],
  providers: [ProceduresService],
})
export class ProceduresModule {}
