import React from 'react'

export default (props) => {
  if (!props.student) {
    return <h2>Loading</h2>
  }

  return (
    <div>
      <h1>{props.student.name}</h1>
      <button className='btn btn-danger' onClick={() => props.onDelete(props.student.id)}>Delete Student</button>
    </div>
  )
}
