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
        received: data => {
          callback(data);
        }
      }
    );
  }

  updateStages(stagesData) {
    this.projectSubscription.perform("updateStages", { stages: stagesData });
  }
}

export default Api;
