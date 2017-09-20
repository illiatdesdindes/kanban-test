import React from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class PresenceBar extends React.Component {
  render() {
    const users = this.props.store.users;

    return (
      <div className="presencebar__component">
        <ul>
          {users.map(user => (
            <li className="presencebar__user">{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PresenceBar;
