class ForumController < ApplicationController
  def index
  end
  def load_messages
    render json: Message.all
  end
  def create_message
    name = params[:name]
    content = params[:content]
    Message.create(name: name, content: content)
    render nothing: true
  end
end
