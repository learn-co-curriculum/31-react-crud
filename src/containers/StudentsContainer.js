import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import { fetchStudents, createStudent, deleteStudent }  from '../api'
import StudentList from '../components/StudentList'

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

  handleDeleteStudent(id){
    deleteStudent(id)
      .then(() => {
        this.setState(prevState => {
          return {
            students: prevState.students.filter(s => s.id !== id)
          }
        })
        this.props.history.push('/students')

      })
  }

  render(){
      return React.createElement(StudentList, {
        students: this.state.students,
        onSubmit: this.handleAddStudent.bind(this),
        onDelete: this.handleDeleteStudent.bind(this)
      })

  }
}

export default withRouter(StudentsContainer)
