import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Stack } from 'react-bootstrap';
import { FormOfNote } from './components/Form-of-note';
import { ListOfNotes } from './components/List-of-notes';

function App() {
  return (
    <div className="App">
      <Stack className='wrapper'>
        <Header />
        <FormOfNote/>
        <ListOfNotes/>
      </Stack>
    </div>
  );
}

export default App;
