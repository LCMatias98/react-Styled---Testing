import logo from './logo.svg';
import styled from 'styled-components';
import { Container,Row, Col } from './Components/layout/Base';

const Alert = styled.span`
  display: "block";
  background: tomato;
  width: 100%
`;

// Estilo a etiqueta
const Title = styled.h1`
  color: red;
  height: 90px;
`;
// Estilo a Componente
const AppRow = styled(Row)`
  justify-content: center;
  background: blue;
`;

function App() {
  return (
    <Container>
      <AppRow>
        <Col>
          <Title> Pruebita</Title>
        </Col>
      </AppRow>

    </Container>
  );
}

export default App;
