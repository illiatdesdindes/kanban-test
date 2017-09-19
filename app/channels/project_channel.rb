class ProjectChannel < ApplicationCable::Channel
  def subscribed
    stream_from "project"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def  updateStages(data)
    ActionCable.server.broadcast("project", data["stages"])
  end

end