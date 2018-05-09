import React from 'react';

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

export default Message;