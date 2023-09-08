import {styled} from 'styled-components'
import FormularioPlanilha from './components/FormularioPlanilha';

const SectionMainStyled = styled.section`
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    transform: translate(-0, -50px);
`;

function App() {

  return (
    <SectionMainStyled>
      <FormularioPlanilha />
    </SectionMainStyled>
  )
}

export default App
