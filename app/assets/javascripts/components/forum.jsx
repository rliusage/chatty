var Forum = React.createClass({
  getInitialState: function(){
    return {
      messages: []
    }
  },
  render: function(){
    return (
      <div>
        <MessageBoard messages={this.state.messages}/>
        <hr/>
        <CommentForm handleCreateMessage={this.handleCreateMessage}/>
      </div>
    )
  },
  componentDidMount: function(){
    this.loadMessages();
    setInterval(this.loadMessages, 300)
  },
  loadMessages: function(){
    var thiz = this;
    $.get(this.props.loadMessagesUrl, function(messages){
      thiz.setState({messages: messages});
    });
  },
  handleCreateMessage: function(data){
    var thiz = this;
    $.post(this.props.createMessageUrl, data, function(){
      thiz.loadMessages();
    })
  }
});