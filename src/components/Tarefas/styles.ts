import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span`
  background-color: #e1a32a;
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
`

export const BarraAcoes = styled.div`
  background-color: #fcfcfc;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
