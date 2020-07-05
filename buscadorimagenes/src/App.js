import React, { Component } from 'react'
import Buscador from './componentes/Buscador';  
import Resultado from './componentes/Resultado';
export default class App extends Component {

  state = {
    termino: 'Café',
    imagenes: []
  }

    consultarApi = () => {
      const url = `https://pixabay.com/api/?key=17338145-9c51cd701d7fafb3da4b25bd1&q=${this.state.termino}&per_page=30`

      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({imagenes: data.hits}))
    }


  datosBusqueda = (termino) => {
    this.setState({
      termino
    },() => {
      this.consultarApi()
    })
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"> Buscador </p>
            <Buscador datosBusqueda={this.datosBusqueda} />
          
        </div>
      <Resultado
        imagenes={this.state.imagenes}
      />
      </div>
    )
  }
}
