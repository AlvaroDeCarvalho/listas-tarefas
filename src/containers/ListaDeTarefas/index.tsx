import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefas'
import * as S from './style'
import TarefaLocal from '../../models/Tarefa'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) =>
        item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }
  return (
    <S.Container>
      <p>
        {filtraTarefas().length} tarefas marcadas como: &quot;{criterio}&ldquo;
        e &quot;{termo}&ldquo;
      </p>
      <ul>
        {filtraTarefas().map((t: TarefaLocal) => (
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
