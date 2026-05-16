import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Versionamento
  app.enableVersioning({
    type: VersioningType.URI,
  })

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Gestão de Agendamentos - Espaço Lilás')
    .setDescription(
      [
        'API desenvolvida para auxiliar na organização dos agendamentos de consultas e procedimentos estéticos da Clínica de Estética Espaço Lilás.',
        '',
        '### Funcionalidades principais',
        '',
        '- Cadastro e gerenciamento de pacientes;',
        '- Controle de agendamentos de consultas e procedimentos;',
        '- Organização de datas, horários e profissionais;',
        '- Registro de procedimentos realizados;',
        '- Acompanhamento do status dos atendimentos;',
        '- Consulta ao histórico de atendimentos dos pacientes.',
        '',
        'O objetivo da aplicação é centralizar as informações da clínica e facilitar a rotina administrativa, tornando a gestão dos atendimentos mais organizada, eficiente e segura.',
      ].join('\n'),
    )
    .setVersion('1')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory)

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
