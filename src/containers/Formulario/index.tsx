import BarraLateral from '../BarraLateral'

const Formulario = () => (
  <>
    <BarraLateral />
    <form>
      <input type="text" placeholder="Titulo" />
      <textarea placeholder="Descrição da tarefa" />
      <input name="prioridade" type="radio" id="urgente" />
      <label htmlFor="urgente">Urgente </label>
      <input name="prioridade" type="radio" id="importante" />
      <label htmlFor="importante">importante </label>
      <input name="prioridade" type="radio" id="normal" />
      <label htmlFor="normal">normal </label>
      <button>submit</button>
    </form>
  </>
)
export default Formulario
