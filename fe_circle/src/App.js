import React from 'react'
import Router from './router'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
      <Router />
      <Welcome name="Edite" />
    </div>
  );
}

export default App
