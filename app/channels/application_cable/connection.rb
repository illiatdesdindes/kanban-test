module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user

    def connect
      self.current_user = authenticate_user
      ap "=" * 100
      ap "user #{current_user.name} connected"
    end

    private 

    def authenticate_user
      User.find_by(id: cookies.signed[:current_user_id])
    end
  end
end
