import React, { Component } from 'react'
import { connect } from 'react-redux'
import createHistory from 'history/createHashHistory'
const history = createHistory()

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount () {
      if (!this.props.authenticated) {
        history.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        history.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = ({ auth: { authenticated } }) => ({ authenticated })

  return connect(mapStateToProps)(Authentication)
}
