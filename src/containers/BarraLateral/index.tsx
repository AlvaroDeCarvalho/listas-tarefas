import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { Campo } from '../../styles'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as enums from './../../uteis/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDO}
            criterio="status"
            legenda="concluidas"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="urgentes"
          />

          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="importantes"
          />

          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="normal"
          />

          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
