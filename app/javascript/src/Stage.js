import React from "react";
import { observer } from "mobx-react";

@observer
class Stage extends React.Component {
  render() {
    const stage = this.props.stage;
    return (
      <div className="stage__component">
        <div className="stage__name">{stage.name}</div>
      </div>
    );
  }
}

export default Stage;
