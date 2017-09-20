import React from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class PresenceBar extends React.Component {
  render() {
    const users = this.props.store.users;

    return <div className="presencebar__component" />;
  }
}

export default PresenceBar;
