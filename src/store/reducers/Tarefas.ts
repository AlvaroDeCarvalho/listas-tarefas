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
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const TarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (TarefaExiste) {
        alert('Ja eixste uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const novaTarefa = {
          ...action.payload,
          /* aqui ele esta pegando o ultimo item do array, selecionando o id deste e item e incrementando
          mais 1 para na hora do push. e o conteudo do novo item sera uma copia de tudo que esta
          no nosso payload */
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizando: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizando
          ? enums.Status.CONCLUIDO
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
