// @flow
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  router,
  form,
  auth: authReducer
})

export default rootReducer
