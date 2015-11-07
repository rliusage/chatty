class ForumController < ApplicationController
  def index
  end
  def load_messages
    render json: Message.all
  end
end
