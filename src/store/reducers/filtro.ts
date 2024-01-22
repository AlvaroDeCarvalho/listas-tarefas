import * as enums from '../../uteis/enums/Tarefa'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}
