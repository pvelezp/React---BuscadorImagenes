import React, { Component } from 'react'
import Imagen from './Imagen';

export default class Resultado extends Component {

    mostrarImagenes = () => {
const imagenes= this.props.imagenes

        if(imagenes.length === 0) return null;

        return (
            <>
            <div className="col-12 p-5 row">
        {imagenes.map(imagen => (
            <Imagen 
                key={imagen.id}
                imagen = {imagen}
            />
        ))}
            </div>
            </>
        )
    }

    render() {
        return (
            <>
               { this.mostrarImagenes()}
            </>
        )
    }
}
