import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import StudentForm from '../components/StudentForm'
import StudentShow from '../components/StudentShow'

function StudentList(props) {
  const nameEls = props.students.map( (student, i) => (
    <li key={i}><Link activeClassName='active' to={`/students/${student.id}`}>{student.name}</Link></li>
  )
)

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
            <Route path="/students/new" render={() => <StudentForm onSubmit={props.onSubmit}/>} />
            <Route path="/students/:id" render={({match}) => {
              const student = props.students.find(student => student.id == match.params.id );
              return (
                StudentShow({onDelete: props.onDelete, student})
              )
            }} />
          </Switch>
        </div>
      </div>
  )
}

export default StudentList
