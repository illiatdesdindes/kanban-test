import mobx, { observable, action, runInAction } from "mobx";
import Api from "./Api.js";

class Store {
  @observable stages = [];

  constructor(stages) {
    this.api = new Api();
    this.api.subscribeProject(stagesData => this.hydrateStages(stagesData));
  }

  @action
  fetchStages() {
    this.api.fetchStages().then(response => {
      this.hydrateStages(response.data);
    });
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

  toJS() {
    return mobx.toJS(this);
  }
}

export default Store;
