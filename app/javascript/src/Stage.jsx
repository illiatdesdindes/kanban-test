import React from "react";
import { observer } from "mobx-react";
import Applicant from "./Applicant.jsx";
import { Droppable } from "react-beautiful-dnd";

@observer
class Stage extends React.Component {
  render() {
    const stage = this.props.stage;
    const applicants = stage.applicants;
    return (
      <div className="stage__component">
        <div className="stage__name">{stage.name}</div>
        <Droppable droppableId={stage.id.toString()} type="APPLICANT">
          {provided => (
            <ul ref={provided.innerRef} className="stage__applicant-list">
              {applicants.map(applicant => (
                <Applicant key={applicant.id} applicant={applicant} />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Stage;
