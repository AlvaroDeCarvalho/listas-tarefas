import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotaoCircular = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 24px;
  text-decoration: none;
`
