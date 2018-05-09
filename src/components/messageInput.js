import React from 'react';

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

export default UserMessageInput;