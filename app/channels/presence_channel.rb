class PresenceChannel < ApplicationCable::Channel
  def subscribed
    stream_from "presence"
    current_user.update(online: true)
    ActionCable.server.broadcast("presence", current_user)
  end

  def unsubscribed
    current_user.update(online: false)
    ActionCable.server.broadcast("presence", current_user)
  end
end
