import './App.css';

import { Header } from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { FormOfNote } from './components/Form-of-notes';
import { ListOfNotes } from './components/List-of-notes';
import { EditModal } from './components/Edit-modal';

function App() {
  return (
    <div className="App">
      <Container xl>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormOfNote/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListOfNotes/>
          </Col>
        </Row>
      </Container>
      <EditModal/>
    </div>
  );
}

export default App;
