import './App.css';
import Comentario from './components/Comentario';

import React, { Component } from 'react';


class App extends Component {
  state = {
    comentarios: [
      {
        id: 1,
        name: 'Juan',
        email: 'Juan@gmail.com',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        date: new Date(2022,7,5)
      },
      {
        id: 2,
        name: 'Pedro',
        email: 'Pedro@gmail.com',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        date: new Date(2022,7,5)
      },
    ]
  }

  addComentario = () => {
    console.log('Adicionar comentario');
    const NovoComentario = {
      id: this.state.comentarios.length + 1,
      name: 'Rafa',
      email: 'Rafa@email.com',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      date: new Date()
    }

    this.setState({
      comentarios: [...this.state.comentarios, NovoComentario]
    });
  }
  render() {
    return (
    <div className="App">
      <h1>My first project!</h1>

      {this.state.comentarios.map(comentario => (
            
        <Comentario key={comentario.id} name={comentario.name} email={comentario.email} date={comentario.date} body={comentario.body}>
        </Comentario>
      ))}

      <button onClick={this.addComentario}>Adicionar comentario</button>
    </div>
  );
  }
}

export default App;
