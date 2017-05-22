import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'
import StudentShow from '../components/StudentShow'

import { fetchStudents, createStudent }  from '../api'

class StudentsContainer extends Component {

  constructor(){
    super()
    this.state = {
      students: []
    }

  }

  componentDidMount(){
    fetchStudents()
      .then( data => this.setState({
        students: data
      }) )
  }

  handleAddStudent(name){
    createStudent(name)
      .then( student => this.setState(prevState => ({students: [...prevState.students, student]})) )
      .catch(e => this.setState(prevState => ({students: prevState.students.filter(person => person.name !== name)})))
  }

  render(){
    return (
      < StudentList students={this.state.students} >
        <Switch>
          <Route path="/students/new" render={() => <StudentForm onSubmit={this.handleAddStudent.bind(this)}/>} />
          <Route path="/students/:id" render={({match}) => {
            const student = this.state.students.find(student => student.id == match.params.id );
            return < StudentShow student={student} />
          }} />
        </Switch>
      </StudentList>
    )
  }
}

export default StudentsContainer
