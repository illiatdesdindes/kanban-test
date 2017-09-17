import React from "react";
import { observer } from "mobx-react";
import Applicant from "./Applicant.jsx";

@observer
class Stage extends React.Component {
  render() {
    const stage = this.props.stage;
    const applicants = stage.applicants;
    return (
      <div className="stage__component">
        <div className="stage__name">{stage.name}</div>
        <ul className="stage__applicant-list">
          {applicants.map(applicant => (
            <Applicant key={applicant.id} applicant={applicant} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Stage;
