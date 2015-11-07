var Message = React.createClass({
  render: function(){
    return (
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" href="#collapse1">{this.props.name}</a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse">
            <div className="panel-body">{this.props.message}</div>
            <div className="panel-footer">{this.props.createdAt}</div>
          </div>
        </div>
      </div>
    )
  }
});