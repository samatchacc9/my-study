import FormAddTodo from './components/FormAddTodo';
import './App.css';
import AddButton from './components/AddButton';
import Remaining from './components/Remaining';
import ListsTodo from './components/ListTodo';
import Container from './components/Container';

function App() {
  return (
    
     <Container>
      <AddButton />
      <FormAddTodo />
      <Remaining/>
     <ListsTodo/>
     </Container>
   
        
     
  );
}

export default App;