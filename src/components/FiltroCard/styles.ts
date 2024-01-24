import styled from 'styled-components'

//o omit remove um atributo da propiedade, ou seja, o PropsSemLegendaEcontador é a propia pros mas removendo o atribuda da leganda e do contador
/* type PropsSemLegendaEContador = Omit<
  Props,
  'contador' | 'legenda' | 'criterio' | 'valor'
> */

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`
export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.div`
  font-size: 14px;
`
