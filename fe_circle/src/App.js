import React from 'react'
import Router from './router'
import { Provider } from 'mobx-react'
import stores from './models'

function App() {
  return (
    <div className="App">
      <Provider {...stores}>
        <Router />
      </Provider>
    </div>
  );
}

export default App
