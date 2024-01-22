import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} ativo={true} />
        <FiltroCard legenda="concluidas" contador={2} />
        <FiltroCard legenda="urgentes" contador={4} />
        <FiltroCard legenda="importantes" contador={10} />
        <FiltroCard legenda="normal" contador={11} />
        <FiltroCard legenda="todas" contador={2} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
