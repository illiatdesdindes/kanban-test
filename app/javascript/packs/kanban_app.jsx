import React from "react";
import ReactDOM from "react-dom";
import KanbanApp from "../src/KanbanApp.jsx";
import Store from "../src/Store.js";
import "../src/css/application.scss";
import "../src/css/stage.scss";
import "../src/css/board.scss";
import "../src/css/applicant.scss";

const store = new Store();
window.store = store;
store.fetchStages();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<KanbanApp store={store} />, document.getElementById("app"));
});
