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
        <CommentForm/>
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
  }
});