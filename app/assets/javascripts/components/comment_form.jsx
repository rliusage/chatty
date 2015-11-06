var CommentForm = React.createClass({
  render: function(){
    return (
      <form role="form">
        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input className="form-control" id="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea className="form-control" rows="5" id="comment"></textarea>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
})