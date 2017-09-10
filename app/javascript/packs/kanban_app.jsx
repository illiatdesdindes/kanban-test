import React from 'react'
import ReactDOM from 'react-dom'

class KanbanApp extends React.Component {

  render(){
    return (
      <h1>Tralalala</h1>
    )
  }

}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<KanbanApp />, document.getElementById('app'));
})

