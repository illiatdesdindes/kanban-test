import React from "react";
import { observer } from "mobx-react";
import { Draggable } from "react-beautiful-dnd";

@observer
class Applicant extends React.Component {
  render() {
    const applicant = this.props.applicant;
    return (
      <Draggable draggableId={applicant.id.toString()} type="APPLICANT">
        {provided => (
          <div>
            <div
              className="applicant__component"
              ref={provided.innerRef}
              style={provided.draggableStyle}
              {...provided.dragHandleProps}
            >
              <div className="applicant__content">
                <div className="applicant__img-wrapper">
                  <img src={applicant.avatar} />
                </div>
                <div className="applicant__info">
                  <div className="applicant__name">{applicant.name}</div>
                  <div className="applicant__job">{applicant.job}</div>
                </div>
              </div>
              <div className="applicant__footer" />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Applicant;
