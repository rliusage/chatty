var MessageBoard = React.createClass({
  render: function(){
    return (
      <div className="well well-sm">
      {this.messageList()}
      </div>
    )
  },
  messageList: function(){
   return _.map(this.props.messages, function(message){
      return <Message name={message.name} messageContent={message.messageContent} createdAt={message.createdAt}/>
    });
  }
});