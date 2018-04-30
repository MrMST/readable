import React, { Component } from 'react'
import {Switch,  Route } from 'react-router-dom'
import Posts from './Posts'

class App extends Component {

  render() {

    return (
      <div className='container'>

        <div className='nav'>
          <h1 className='header'>Readable</h1>
        </div>
        <Switch>
          <Route exact path ='/' component={Posts} />
        </Switch>
      </div>
    )
  }

}

export default App
