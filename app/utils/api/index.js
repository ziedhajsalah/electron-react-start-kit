/* global fetch */
const apiUrl = 'http://localhost:3000'

export const signin = async (email, password) => {
  const response = await fetch(`${apiUrl}/signin`, {
    method: 'POST',
    body: JSON.stringify({email, password})
  })


  if (response.ok) {
    return await response.json()
  } else {
    throw Error('Auth Error!')
  }
}

export const signup = async (email, password) => {
  const response = await fetch(`${apiUrl}/signup`, {
    method: 'POST',
    body: JSON.stringify({email, password})
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw Error('Signup Error!')
  }
}
