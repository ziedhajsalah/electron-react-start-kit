/* global localStorage */
import createHistory from 'history/createHashHistory'
const history = createHistory()

import { signin, signup } from '../utils/api'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './actionTypes'

const authError = (error) => ({type: AUTH_ERROR, payload: error})

export const signinUser = ({email, password}) => dispatch => {
  signin(email, password)
    .then(response => {
      dispatch({type: AUTH_USER})
      localStorage.setItem('token', response.token)
      history.push('/feature')
    }, error => {
      dispatch(authError(error.message))
    })
}

export const signout = () => dispatch => {
  localStorage.removeItem('token')
  dispatch({type: UNAUTH_USER})
}

export const signupUser = ({email, password}) => dispatch => {
  signup(email, password)
    .then(response => {
      dispatch({type: AUTH_USER})
      localStorage.setItem('token', response.token)
      history.push('/feature')
    }, error => {
      dispatch(authError(error.message))
    })
}
