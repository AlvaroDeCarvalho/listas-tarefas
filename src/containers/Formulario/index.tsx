import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Form, Opecoes, Opecao } from './styles'
import * as S from '../../styles'

import * as enums from '../../uteis/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/Tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdd = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )
    dispatch(cadastrar(tarefaParaAdd))
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Titulo>Nova Tarefa</S.Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <S.Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <S.Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opecoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((p) => (
            <Opecao key={p}>
              <input
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                value={p}
                name="prioridade"
                type="radio"
                id={p}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={p}>{p} </label>
            </Opecao>
          ))}
        </Opecoes>
        <S.BotaoSalvar>submit</S.BotaoSalvar>
      </Form>
    </S.MainContainer>
  )
}
export default Formulario
