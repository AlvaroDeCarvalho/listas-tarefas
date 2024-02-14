import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { Botao, Campo } from '../../styles'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as enums from './../../uteis/enums/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      {mostrarFiltros ? (
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
      ) : (
        <Botao onClick={() => navigate('/')}> Voltar a lista de tarefas</Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
