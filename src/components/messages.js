import React from 'react';
import Message from './message';

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

export default Messages;