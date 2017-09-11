import React from 'react'
import ReactDOM from 'react-dom'
import KanbanApp from '../src/KanbanApp.jsx'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<KanbanApp />, document.getElementById('app'))
})

