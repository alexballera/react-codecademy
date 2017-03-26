'use strict'
/**
 * Importante agregar key en el li
 */
import React from 'react'

var NavBar = React.createClass({
  render: () => {
    var pages = ['Home', 'Acerca', 'Servicios', 'Blog', 'Contacto']
    var navLinks = pages.map((page, index) => {
      return (
        <li key={index}>
          <a href={'/' + page} >{page}</a>
        </li>
      )
    })
    return <nav>{navLinks}</nav>
  }
})
module.exports = NavBar
