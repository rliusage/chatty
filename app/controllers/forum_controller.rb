class ForumController < ApplicationController
  def index
  end
  def load_messages
    render json: Message.all.order(created_at: :asc)
  end
  def create_message
    name = ActionController::Base.helpers.sanitize(params[:name])
    content = ActionController::Base.helpers.sanitize(params[:content])

    Message.create(name: name, content: content) if name.present? && content.present?

    render nothing: true
  end
end
