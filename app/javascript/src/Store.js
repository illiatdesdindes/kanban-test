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

  @action
  reorderApplicant(result, board) {
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
    board.forceUpdate();
  }

  toJS() {
    return mobx.toJS(this);
  }
}

export default Store;
