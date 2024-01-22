import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefas'
import * as S from './style'
import TarefaLocal from '../../models/Tarefa'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((t: TarefaLocal) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}
export default ListaDeTarefas
