'use strict'
import React from 'react'

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.handleClick}>Click Me!</button>
    )
  }
})

module.exports = Button
