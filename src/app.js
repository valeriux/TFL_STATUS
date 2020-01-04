import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import 'bulma'

import Home from './components/Home'



class App extends React.Component {

  render() {
    return (
      <main>
        < Home />

      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
