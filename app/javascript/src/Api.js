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
