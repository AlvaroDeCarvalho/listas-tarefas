import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../uteis/enums/Tarefa'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}
const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const FiltroSlice = createSlice({
  name: 'Filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = FiltroSlice.actions
export default FiltroSlice.reducer
