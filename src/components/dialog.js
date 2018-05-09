import React from 'react';
import Messages from './messages';
import UserMessageInput from './messageInput';

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

export default Dialog;