import React, { Component } from 'react';
import Testimonio from './components/Testimonio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='contenedor-ppal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="Emma"
          profesion="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." />

<Testimonio 
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="Sarah"
          profesion="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble." />
        </div>
      </div>
    );
  }
}

export default App;
