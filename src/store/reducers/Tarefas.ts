import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../uteis/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar javascript ate o modulo 40',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar javascript'
    },
    {
      id: 2,
      descricao: 'Estudar typescript para fazer o novo porfolio',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar typescript'
    },
    {
      id: 3,
      descricao: 'ir para academia treinar peito',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      titulo: 'se exercitar '
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    //a action é um objeto que representa alguma mudança no estado global, ou seja, na hora de usar o dispatch vai ser necessario passar o
    //payload do slice.
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDoItem = state.itens.findIndex((t) => {
        t.id === action.payload.id
      })
      if (indexDoItem >= 0) {
        state.itens[indexDoItem] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
