import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

class Dialog extends React.Component {
  constructor(props) {
    super(props);

    const cachedMessages = localStorage.getItem(this.props.username);
    if (cachedMessages) {
      this.state = ({ messages: JSON.parse(cachedMessages) });
    } else {
      this.state = { messages: [] };
    }

    this.sendHandler = this.sendHandler.bind(this);
  }

  sendHandler(message) {
    const messageObj = {
      username: this.props.username,
      message
    };

    messageObj.myMessage = true;
    this.addMessage(messageObj);
  } 

  addMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages});

    localStorage.setItem(message.username, JSON.stringify(messages));
  }

  render () {
    return (
      <div className="container container-dialog">
        <div className="dialog-name">
          <h2>Test task</h2>
        </div>
        <Messages messages={this.state.messages} />
        <UserMessageInput onSend={this.sendHandler} />
      </div>
    )
  }
}

class UserMessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { UserMessageInput: '' };

    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(evt) {
    evt.preventDefault();

    this.setState({ UserMessageInput: '' });

    this.props.onSend(this.state.UserMessageInput);
  }

  textChangeHandler(evt) {
    this.setState({ UserMessageInput: evt.target.value });
  }

  render () {
    return (
      <form className="message-form" onSubmit={this.submitHandler}>
        <input className="message-input"
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.UserMessageInput}
          placeholder="Type message..." />
        <button type="submit" value="submit" className="btn-submit"></button>
      </form>
    )
  }
}

class Messages extends React.Component {
  render () {
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
        key={i}
        username={message.username}
        message={message.message}
        myMessage={message.myMessage} />
      );
    });

    return (
      <div className="messages-list">
        { messages }
      </div>
    );
  }
}

class Message extends React.Component {
  render () {
    const myMessage = this.props.myMessage ? 'my-message' : '';

    return (
      <div className={`message-item ${myMessage}`}>
        <p className="user-message">
          { this.props.message }
        </p>
        <p className="user-name">
          { this.props.username }
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Chat />, document.getElementById("root"));