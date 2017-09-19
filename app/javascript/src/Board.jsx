import React from "react";
import { inject, observer } from "mobx-react";
import Stage from "./Stage.jsx";
import { DragDropContext } from "react-beautiful-dnd";

@inject("store")
@observer
class Board extends React.Component {
  onDragEnd = result => {
    if (!result.destination) return;
    console.log(result);
    this.props.store.reorderApplicant(result, this);
  };

  render() {
    const stages = this.props.store.stages;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="board__component">
          {stages.map(stage => <Stage key={stage.id} stage={stage} />)}
        </div>
      </DragDropContext>
    );
  }
}

export default Board;
