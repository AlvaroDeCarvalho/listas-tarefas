import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../uteis/enums/Tarefa'
const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'vai estudar seu buceta',
      1
    ),
    new Tarefa(
      'Estudar Typescript',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDO,
      'vai estudar',
      2
    ),
    new Tarefa(
      'ir para academia ',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDO,
      'vai  buceta',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
