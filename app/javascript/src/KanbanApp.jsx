import React from "react";
import { Provider } from "mobx-react";
import Board from "./Board.jsx";

class KanbanApp extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <nav className="navbar__component">Kanban</nav>
          <Board />
        </div>
      </Provider>
    );
  }
}

export default KanbanApp;
