import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import StudentForm from './StudentForm'

function StudentList(props) {
  const nameEls = props.students.map( (student, i) => <li key={i}><Link to={`/students/${student.id}`}>{student.name}</Link></li>)

  return (
      <div>
      <div className='col-md-4'>
        <ul>
          { nameEls }
        </ul>
        <Link to="/students/new">Add a Student</Link>
        </div>
        <div className='col-md-8'>
          <Switch>
            <Route exact path="/students/new" render={() => <StudentForm onSubmit={props.onSubmit}/>} />
            <Route path="/students/:id" render={({match}) => {
              const student = props.students.find(student => student.id == match.params.id )
              return (<h1>{student.name}</h1>)
            }} />
          </Switch>
        </div>
      </div>
  )
}

export default StudentList
