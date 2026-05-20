import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PatientsModule } from './modules/patients/patients.module'
import { ProceduresModule } from './modules/procedures/procedures.module'
import { ProfessionalsModule } from './modules/professionals/professionals.module'
import { PrismaService } from './prisma.service'
import { AppointmentsModule } from './modules/appointments/appointments.module';

@Module({
  imports: [ProceduresModule, PatientsModule, ProfessionalsModule, AppointmentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
