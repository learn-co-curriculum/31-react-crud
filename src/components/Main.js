import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import StudentsContainer from '../containers/StudentsContainer'

export default () => {
  return (
    <div>
      < NavBar title="Dog and Student Lister" color="black" />
      < Route path="/students" component={StudentsContainer} />
      < Route exact path="/about"  render={() => <h1>This is an app about dogs and students</h1>}/>
    </div>
  )
}
