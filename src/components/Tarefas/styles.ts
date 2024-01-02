import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../uteis/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE) return variaveis.verde
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDO) return variaveis.amarelo2
  }
  return '#ccc'
}

/*

MANEIRA CONVENCIONAL SEM A UTILIZAÇÃO DOS ENUMNS DO REACT NATIVE
type TagProps = {
  prioridade?: string
  status?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'pendente') return variaveis.amarelo2
    if (props.status === 'concluida') return variaveis.verde
  } else if ('prioridade' in props) {
    if (props.prioridade === 'urgente') return variaveis.amarelo
    if (props.prioridade === 'importante') return variaveis.amarelo
    console.log(props.prioridade)
  }
  return '#ccc'
}
*/

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  background-color: ${(props) => retornaCorDeFundo(props)};
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  background-color: #fcfcfc;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 16px 16px;
`

export const Botao = styled.button`
  background-color: #2f3640;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
