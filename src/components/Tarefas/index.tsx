import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BotaoSalvar, Botao, BotaoCancelar } from '../../styles'
import * as S from './styles'

import { alteraStatus, editar, remover } from '../../store/reducers/Tarefas'
import TarefaClass from '../../models/Tarefa'

import * as enums from '../../uteis/enums/Tarefa'
type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()
  const [descricao, setDescricao] = useState('')
  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizando: e.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enums.Status.CONCLUIDO}
          id={titulo}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelar onClick={() => cancelarEdicao()}>
              Cancelar
            </BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
