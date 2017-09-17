import axios from "axios";

class Api {
  fetchStages() {
    return axios.get("/stages.json");
  }
}

export default Api;
