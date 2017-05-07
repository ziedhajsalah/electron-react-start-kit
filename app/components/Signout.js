import React, { Component } from 'react'
import { connect } from 'react-redux'
import createHistory from 'history/createHashHistory'
const history = createHistory()
import * as actions from '../actions'

class Signout extends Component {
  componentWillMount () {
    this.props.signout()
  }

  componentDidMount () {
    setTimeout(() => history.push('/'), 3000)
  }

  render () {
    return (
      <div>
       Sorry to see you leave
      </div>
    )
  }
}

const mapStateToProps = state => ({isAuth: state.auth.authenticated})

export default connect(mapStateToProps, actions)(Signout)
