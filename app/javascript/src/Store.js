import mobx, { observable, action, runInAction } from "mobx";
import Api from "./Api.js";

class Store {
  @observable stages = [];
  @observable currentUser = {};
  @observable users = [];

  constructor(stages) {
    this.api = new Api();
    this.api.subscribeProject(stagesData => this.hydrateStages(stagesData));
    this.api.subscribePresence(userData => this.hydrateUser(userData))
  }

  @action
  fetchStages() {
    this.api.fetchStages().then(response => {
      this.hydrateStages(response.data);
    });
  }

  @action
  fetchCurrentUser() {
    this.api.fectchCurrentUser().then(
      action(response => {
        this.currentUser = response.data;
      })
    );
  }

  @action
  fetchUsers() {
    this.api.fetchUsers().then(
      action(response => {
        this.users.replace(response.data);
      })
    );
  }

  @action
  moveApplicant(result) {
    const sourceStageId = parseInt(result.source.droppableId);
    const sourceApplicantIndex = parseInt(result.source.index);
    const sourceStage = this.stages.find(stage => stage.id == sourceStageId);
    const [applicant] = sourceStage.applicants.splice(sourceApplicantIndex, 1);

    const destinationStageId = parseInt(result.destination.droppableId);
    const destinationApplicantIndex = parseInt(result.destination.index);
    const destinationStage = this.stages.find(
      stage => stage.id == destinationStageId
    );
    destinationStage.applicants.splice(destinationApplicantIndex, 0, applicant);
    this.api.updateStages(this.toJS().stages);
  }

  @action
  hydrateStages(stagesData) {
    this.stages.replace(stagesData);
  }

   @action
   hydrateUser(userData) {
     let user = this.users.find((user) => user.id == userData.id)
     if (user) {
       user = userData
     } else {
       this.users.push(userData)
     }
   }

  toJS() {
    return mobx.toJS(this);
  }
}

export default Store;
