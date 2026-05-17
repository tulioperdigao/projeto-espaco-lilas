import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProceduresModule } from './modules/procedures/procedures.module'
import { PrismaService } from './prisma.service'
import { PatientsModule } from './modules/patients/patients.module';

@Module({
  imports: [ProceduresModule, PatientsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
