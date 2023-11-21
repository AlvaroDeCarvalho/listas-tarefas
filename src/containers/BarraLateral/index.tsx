import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
