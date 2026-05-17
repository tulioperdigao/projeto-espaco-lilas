import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProceduresModule } from './modules/procedures/procedures.module'
import { PrismaService } from './prisma.service'

@Module({
  imports: [ProceduresModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
