global.jQuery = require('jquery')
import tether from 'tether'
global.Tether = tether
require('bootstrap')
import test from './js/lib/test.js'
import app from './app.jsx'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    test()
    app()
  }
})()
