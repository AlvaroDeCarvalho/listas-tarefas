/* eslint-disable prefer-const */
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Tarefa from '../../components/Tarefas'
import * as S from '../../styles/index'
import TarefaLocal from '../../models/Tarefa'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exbieTarefasFiltradas = (quantidade: number) => {
    let mensagem = ''
    const comp =
      termo !== undefined && termo.length > 0 ? ` e com titulo: "${termo}"` : ''
    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas encontadas como: todas ${comp}`
    } else {
      mensagem = `${quantidade} tarefas encontradas como "${criterio} = ${valor}"`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exbieTarefasFiltradas(tarefas.length)
  return (
    <S.MainContainer>
      <S.Titulo>{mensagem}</S.Titulo>
      <ul>
        {tarefas.map((t: TarefaLocal) => (
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
    </S.MainContainer>
  )
}
export default ListaDeTarefas
