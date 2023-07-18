const Login = () => {
  const userDet = () => ({
    userName: 'rahul',
    passWord: 'rahul@2021',
  })
  const onClickLogin = async event => {
    event.preventDefault()
    const user = userDet()
    const {userName, passWord} = user
    const userDetails = {userName, passWord}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  return (
    <form onSubmit={onClickLogin}>
      <h1>Please Login</h1>
      <button type="submit">Login with Sample Creds</button>
    </form>
  )
}

export default Login
