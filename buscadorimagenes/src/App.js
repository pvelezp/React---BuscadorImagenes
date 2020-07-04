import React, { Component } from 'react'
import Buscador from './componentes/Buscador';

export default class App extends Component {

  state = {
    termino: 'Café'
  }

    consultarApi = () => {
      const url = `https://pixabay.com/api/?key=17338145-9c51cd701d7fafb3da4b25bd1&q=${this.state.termino}`

      console.log(url)
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

        {this.state.termino}
      </div>
    )
  }
}
