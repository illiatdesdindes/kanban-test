import React from "react";
import { Provider } from "mobx-react";
import Board from "./Board.jsx";
import Navbar from "./Navbar";
import PresenceBar from "./PresenceBar";

class KanbanApp extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Navbar />
          <div>
            <PresenceBar />
            <Board />
          </div>
        </div>
      </Provider>
    );
  }
}

export default KanbanApp;
