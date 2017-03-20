global.jQuery = require('jquery')
import tether from 'tether'
global.Tether = tether
require('bootstrap')
import test from './js/lib/test.js'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    test()
  }
})()
