import { Injectable } from '@nestjs/common'

@Injectable()
export class ProceduresService {
  findAll() {
    return ['teste1', 'teste2']
  }

  findById(id: string) {
    return `teste com id ${id} como Param`
  }

  create(data: any) {
    return `teste com ${data} no Body`
  }

  update(id: string, data: any) {
    return `teste com id ${id} como Param e com ${data} no Body`
  }

  delete(id: string) {
    return `teste rota delete com id ${id} como Param`
  }
}
