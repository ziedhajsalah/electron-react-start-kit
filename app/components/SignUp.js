import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../actions'

const renderInput = ({type, input, label, meta: {touched, error, warning}}) => (
  <fieldset className='form-group'>
    <label>{label}:</label>
    <input type={type} {...input} className='form-control' />
    {
      (error && touched) &&
        <div className='alert alert-danger'>{error}</div>
    }
  </fieldset>
)

class Signup extends Component {
  submitForm ({email, password, confirmPassword}) {
    console.log(email, password, confirmPassword)
  }

  render () {
    const { errorMessage, handleSubmit, pristine, valid } = this.props

    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        <Field name='email'
          label='Email' type='email' component={renderInput} />
        <Field name='password'
          label='Password' type='password' component={renderInput} />
        <Field name='confirmPassword'
          label='Confirm Password'
          type='password' component={renderInput} />
        {
          errorMessage &&
            <div className='alert alert-danger'>{errorMessage}</div>
        }
        <button className='btn btn-primary'
          disabled={!valid || pristine}
          action='submit'>
          Signin
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => ({})

/* eslint-disable no-class-assign */
Signup = connect(mapStateToProps, actions)(Signup)
/* eslint-enable no-class-assign */

const validate = values => {
  const errors = {}

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'The two passwords does not match!'
  }

  return errors
}

const warn = values => {
  const warnings = {}

  return warnings
}

export default reduxForm({form: 'signup', validate, warn})(Signup)
