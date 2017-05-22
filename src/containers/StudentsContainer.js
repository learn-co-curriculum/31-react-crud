import React, { Component } from 'react'

import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'

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
      < StudentList students={this.state.students} onSubmit={this.handleAddStudent.bind(this)} />
    )
  }
}

export default StudentsContainer
