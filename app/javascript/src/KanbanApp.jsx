import React from "react";
import { Provider } from "mobx-react";
import Board from "./Board.jsx";
import Navbar from "./Navbar";

class KanbanApp extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Navbar />
          <Board />
        </div>
      </Provider>
    );
  }
}

export default KanbanApp;
