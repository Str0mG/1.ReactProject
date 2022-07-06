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
        date: new Date(2022,6,1,17,30,0)
      }
    ],
    NovoComentario: {
      id: null,
      name: '',
      email: '',
      body: '',
      date: new Date()
    }
  }

  addComentario = evento => {
    evento.preventDefault();

    const NovoComentario = {...this.state.NovoComentario, id: this.state.comentarios.length + 1,date: new Date()};

    this.setState({
      comentarios: [...this.state.comentarios, NovoComentario],
      NovoComentario: {
        id: null,
        name: '',
        email: '',
        body: '',
        date: new Date()
      }
    });
  }
''
  Digitacao = event => {
      const { name, value } = event.target;
      this.setState({ NovoComentario: { ...this.state.NovoComentario, [name]: value } });
  }

  removeComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c.id !== comentario.id);
    this.setState({ comentarios: lista });
  }

  render() {
    return (
    <div className="App">
      <h1>My first project!</h1>

      {this.state.comentarios.map(comentario => (
            
        <Comentario 
          key={comentario.id} 
          name={comentario.name} 
          email={comentario.email} 
          date={comentario.date} 
          body={comentario.body}
          onRemove={this.removeComentario.bind(this, comentario)}>
        </Comentario>
      ))}

      <form method='post' onSubmit={this.addComentario} className='forms'>
        <h2>Adicionar comentario</h2>
        <div>
          <input 
            type="text" 
            name="name"
            onChange={this.Digitacao} 
            value={this.state.NovoComentario.name}
            required
            placeholder="Digite seu nome" />
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            onChange={this.Digitacao}
            value={this.state.NovoComentario.email}
            required 
            placeholder="Digite seu email"/>
        </div>
        <div>
          <textarea 
            name="body" 
            onChange={this.Digitacao}
            value={this.state.NovoComentario.body}  
            required
            rows="4"/>
        </div>
        <button type="submit">Enviar comentario</button>
      </form>

    </div>
  );
  }
}

export default App;
