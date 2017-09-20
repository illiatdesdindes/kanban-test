import React from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Navbar extends React.Component {
  render() {
    const currentUser = this.props.store.currentUser;

    return (
      <nav className="navbar__component">
        <span className="navbar__title">Kanban</span>
        <div className="navbar__current-user">
          <img className="navbar__avatar" src={currentUser.avatar} />

          <span className="navbar__user-name">{currentUser.name}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
