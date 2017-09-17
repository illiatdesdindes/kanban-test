import mobx, { observable, action, runInAction } from "mobx";
import Api from "./Api.js";

class Store {
  @observable stages = [];

  constructor(stages) {
    this.api = new Api();
  }

  @action
  fetchStages() {
    this.api.fetchStages().then(
      action(response => {
        this.stages = this.stages.concat(response.data);
      })
    );
  }

  toJS() {
    return mobx.toJS(this);
  }
}

export default Store;
