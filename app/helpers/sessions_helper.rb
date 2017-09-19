module SessionsHelper

  def current_user
    @current_user
  end

  def authenticate_user
    @current_user = User.find_or_create_user(session[:current_user_id])
    session[:current_user_id] = @current_user.id
  end

end