import React from 'react'

export default class StudentForm extends React.Component {

  constructor(props){
    super()
    this.state = { student: ''}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState({
      student: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit( this.state.student )
    this.setState({student: ''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Student Name</label>
        <input type='text' value={this.state.student} onChange={this.handleInputChange}/>
        <input type='submit' value='Add a Student' />
      </form>
    )
  }
}
