import { Provider } from 'react-redux'
//instalaçao do react router =>  npm install --save react-router-dom
// https://reactrouter.com/en/main
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'

import store from './store/index'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App
