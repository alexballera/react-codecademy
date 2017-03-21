# Curso de React de Codecademy

## Estructura Básica

Se importan las librerías

El método render abre y cierra con paréntesis " () "

    import React from 'react'
    import ReactDOM from 'react-dom'

    ReactDOM.render(
      <h1>Hola Mundo</h1>,
      document.getElementById('main')
    )

## Etiquetas sin el tag de cierre

Se debe colocar el slash " / " al final para cerrar.

    ReactDOM.render(
      <img src="imagen.jpg"/>,
      document.getElementById('main')
    )
