'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = () => {
  ReactDOM.render(
    <h1>Hola Mundo</h1>,
    document.getElementById('main')
  )
  ReactDOM.render(
    <div>
      <h2>Este es un subtitulo</h2>
      <p>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Adipisci, quibusdam?
      </p>
    </div>,
    document.getElementById('main')
  )
}
