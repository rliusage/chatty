var Message = React.createClass({
  render: function(){
    return (
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" href={'#'+ this.props.panelId}>{this.props.name + " " + this.props.createdAt}</a>
            </h4>
          </div>
          <div id={this.props.panelId} className="panel-collapse collapse">
            <div className="panel-body">{this.props.content}</div>
          </div>
        </div>
      </div>
    )
  }
});