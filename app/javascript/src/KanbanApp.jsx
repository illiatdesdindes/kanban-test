import React from "react";
import { Provider } from "mobx-react";
import Board from "./Board.jsx";
import Navbar from "./Navbar";
import PresenceBar from "./PresenceBar";
import DevTools from 'mobx-react-devtools';

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
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default KanbanApp;
