import React from "react";
import { inject, observer } from "mobx-react";
import Stage from "./Stage";

@inject("store")
@observer
class Board extends React.Component {
  render() {
    const stages = this.props.store.stages;

    return (
      <div className="board__component">
        {stages.map(stage => <Stage key={stage.id} stage={stage} />)}
      </div>
    );
  }
}

export default Board;
