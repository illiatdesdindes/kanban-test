class SessionsController < ApplicationController
  def me
    render json: current_user.to_json
  end
end
