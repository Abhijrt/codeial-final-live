import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputref = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    console.log('this.state', this.state);
    // e.preventDefault();
    // console.log('Email', this.emailInputRef);
    // console.log('Password', this.passwordInputref);
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            // ref={this.passwordInputref}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
