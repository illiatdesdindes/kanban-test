import React from "react";
import { inject, observer } from "mobx-react";

@observer
class PresenceIcon extends React.Component {
  render() {
    const online = this.props.online;
    let css = online
      ? "presencebar__icon--online"
      : "presencebar__icon--offline";
    css += " presencebar__icon";

    return <span className={css} />;
  }
}

@inject("store")
@observer
class PresenceBar extends React.Component {
  render() {
    const users = this.props.store.users;

    return (
      <div className="presencebar__component">
        <ul>
          {users.map(user => (
            <li key={user.id} className="presencebar__user">
              <PresenceIcon online={user.online} />
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PresenceBar;
