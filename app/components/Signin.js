import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../actions'

const renderInput = field =>
  <input type={field.type} {...field.input} className='form-control' />

let SigninForm = ({ handleSubmit, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='form-group'>
        <label>Email:</label>
        <Field name='email' type='email' component={renderInput} />
      </fieldset>
      <fieldset className='form-group'>
        <label>Password:</label>
        <Field name='password' type='password' component={renderInput} />
      </fieldset>
      {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
      <button className='btn btn-primary' action='submit'>Signin</button>
    </form>
  )
}

SigninForm = reduxForm({ form: 'signin' })(SigninForm)

const mapStateToProps = (state) => ({errorMessage: state.auth.error})

SigninForm = connect(mapStateToProps)(SigninForm)

let Signin = ({signinUser}) =>
  <SigninForm onSubmit={({email, password}) => {
    signinUser({email, password})
  }} />

Signin = connect(null, actions)(Signin)

export default Signin
