import './App.css';
import Comentario from './components/Comentario';


function App() {
  return (
    <div className="App">
      <h1>My first project!</h1>
      <Comentario name='Gabriel' email='gabriel@gmail.com' date={new Date(2022,7,5)}>
        Ola! tudo bem?
      </Comentario>
      <Comentario name='Maria' email='maria@gmail.com' date={new Date(2022,7,5)}>
        Alguem poderia me ajudar?
      </Comentario> 
      <Comentario name='Rafael' email='rafa@gmail.com' date={new Date(2022,7,5)}>
        Vamos ser amigos?
      </Comentario>
    </div>
  );
}

export default App;
