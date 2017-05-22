import React from 'react'

export default (props) => {
  if (!props.student) {
    return <h2>Loading</h2>
  }
  
  return (<h1>{props.student.name}</h1>)
}
