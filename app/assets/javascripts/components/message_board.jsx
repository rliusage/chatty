var MessageBoard = React.createClass({
  render: function(){
    return (
      <div className="well well-sm">
      {this.messageList()}
      </div>
    )
  },
  messageList: function(){
    var thiz = this;
    return _.map(this.props.messages, function(message){
      return <Message name={message.name} content={message.content} createdAt={message.created_at} panelId={thiz.generatePanelId()}/>
    });
  },
  generatePanelId: function(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
});