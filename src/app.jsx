'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = () => {
  ReactDOM.render(
    <h1>Hola Mundo</h1>,
    document.getElementById('basico')
  )
  ReactDOM.render(
    <div>
      <h2>Este es un subtitulo</h2>
      <p>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Adipisci, quibusdam?
      </p>
    </div>,
    document.getElementById('bloque')
  )
  // Componentes
  var Titulo = React.createClass({
    render: function () {
      return (
        <h1>Componente Básico</h1>
      )
    }
  })

  ReactDOM.render(
    <Titulo />,
    document.getElementById('componente-basico')
  )

  // Component class
  var friends = [
    {
      title: 'Yummmmmmm',
      src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg'
    },
    {
      title: 'Hey Guys!  Wait Up!',
      src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg'
    },
    {
      title: 'Yikes',
      src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg'
    }
  ]

  var Friend = React.createClass({
    render: function () {
      var friend = friends[2]
      return (
        <div>
          <h1>{friend.title}</h1>
          <img src={friend.src} width='200' />
        </div>
      )
    }
  })

  ReactDOM.render(
    <Friend />,
    document.getElementById('component-class')
  )

  // Uso de condicionales
  var fiftyFifty = Math.random() < 0.5
  console.log(fiftyFifty)

  var TodaysPlan = React.createClass({
    render: function () {
      var task
      if (!fiftyFifty) {
        task = 'out'
      } else {
        task = 'to bed'
      }
      return <h1>Tonight I'm going {task} WOOO</h1>
    }
  })
  ReactDOM.render(
    <TodaysPlan />,
    document.getElementById('TodaysPlan')
  )
}
