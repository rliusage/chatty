var CommentForm = React.createClass({
  getInitialState:function(){
    return {hasWarning: false}
  },
  render: function(){
    return (
      <div>
        {this.warning()}
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
      </div>
    )
  },
  warning: function(){
    var warningElement;
    if(this.state.hasWarning){
      warningElement = (
        <div className="alert alert-danger" >
          <a href="#" className="close" aria-label="close" onClick={this.closeWarning}>&times;</a>
          Missing Name or Conetnt.
        </div>);
    }
    return warningElement;
  },
  closeWarning: function(e){
    e.preventDefault();
    this.setState({hasWarning:false});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var name=this.refs.name.value;
    this.refs.name.value = "";
    var content = this.refs.content.value;
    this.refs.content.value = "";

    if (name == "" || content==""){
      this.setState({hasWarning: true})
    }else{
      this.props.handleCreateMessage({name: name, content: content});
    }
  }
})