import React from 'react';
import Dialog from './dialog';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: ''};

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(evt) {
    this.setState({ username: evt.target.value });
  }

  usernameSubmitHandler(evt) {
    evt.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render () {
    if (this.state.submitted) {
      return (
        <Dialog username={this.state.username} />
      )
    }

    return (
      <div className="container container-index">
        <h1>Chat</h1>
        <div className="logo"></div>
        <form 
          className="login-block"
          onSubmit={this.usernameSubmitHandler}>
          <label>Username
            <input 
              id="user-name"
              type="email"
              placeholder="andrea@app.com" 
              onChange={this.usernameChangeHandler}
              required />
          </label>
          <button type="submit" value="submit" className="btn-start">Get Started</button>
        </form>
      </div>
    )
  }
}

export default Chat;