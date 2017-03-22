# Curso de React de Codecademy

## Apply Production Environment
    gulp.task('apply-prod-environment', () => {
      process.env.NODE_ENV = 'production'
    })

## Estructura Básica

Se importan las librerías

    import React from 'react'
    import ReactDOM from 'react-dom'

El método render abre y cierra con paréntesis " () "

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
