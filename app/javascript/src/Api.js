import axios from "axios";

class Api {
  constructor() {
    this.cable = ActionCable.createConsumer("/cable");
    this.projectSubscription = null;
  }

  // REST

  fetchStages() {
    return axios.get("/stages.json");
  }

  fectchCurrentUser() {
    return axios.get("sessions/me");
  }

  fetchUsers() {
    return axios.get("users");
  }

  // WEBSOCKET

  subscribeProject(callback) {
    this.projectSubscription = this.cable.subscriptions.create(
      { channel: "ProjectChannel" },
      {
        received: stagesData => {
          callback(stagesData);
        }
      }
    );
  }

  updateStages(stagesData) {
    this.projectSubscription.perform("updateStages", { stages: stagesData });
  }

  subscribePresence(callback) {
    this.presenceSubscription = this.cable.subscriptions.create(
      {channel : "PresenceChannel"},
      {
        received: userData => {
          callback(userData);
        }
      }
    )
  }
}

export default Api;
