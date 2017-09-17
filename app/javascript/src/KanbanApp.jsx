import React from "react";
import { Provider } from "mobx-react";
import Board from "./Board.jsx";

class KanbanApp extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Board />
      </Provider>
    );
  }
}

export default KanbanApp;
