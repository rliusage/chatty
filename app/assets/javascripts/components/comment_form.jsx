var CommentForm = React.createClass({
  render: function(){
    return (
      <form role="form">
        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input className="form-control" id="name" ref="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea className="form-control" rows="5" id="comment" ref="content"></textarea>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Create Message</button>
      </form>
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    var name=this.refs.name.value;
    this.refs.name.value = "";
    var content = this.refs.content.value;
    this.refs.content.value = "";
    this.props.handleCreateMessage({name: name, content: content});

  }
})