// @flow
import React, { Component } from 'react'
import type { Children } from 'react' // eslint-disable-line

export default class App extends Component {
  props: {
    children: Children
  }

  render () {
    return (
      <div className='container-fluid'>
        {this.props.children}
      </div>
    )
  }
}
