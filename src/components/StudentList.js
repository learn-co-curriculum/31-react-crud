import React from 'react'
import {Link} from 'react-router-dom'

import StudentForm from './StudentForm'
import StudentShow from './StudentShow'

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
          { props.children }
        </div>
      </div>
  )
}

export default StudentList
