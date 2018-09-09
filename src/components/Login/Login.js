import React from 'react';
import './Login.scss'

export default class Login extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      isFormValid: null
    }

    this.updateField = this.updateField.bind(this)
    this.login = this.login.bind(this)
  }

  login (e) {
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ isFormValid: false })
    } else {
      this.setState({ isFormValid: true })
    }
    e.preventDefault()
  }

  updateField (e) {
    console.log(e.target.name, ' has the value: ', e.target.value)
    if (e.target.name === 'username') {
      this.setState({ username: e.target.value })
    } else {
      this.setState({ password: e.target.value })
    }
  }

  render() {
    return (
      <div id="login-component">
        <div className={`login-form ${this.state.isFormValid ? 'success' : 'error'}`}>
          <form onSubmit={this.login}>
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" onChange={this.updateField} value={this.state.username}/>
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" onChange={this.updateField} value={this.state.password}/>
            </div>
            <div className="actions">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
