const apiUrl = 'http://localhost:3000/'

export const signinUser = ({email, password}) => dispatch => {
  window.fetch(`${apiUrl}signin`, {
    method: 'POST',
    body: JSON.stringify({email, password})
  })
}
