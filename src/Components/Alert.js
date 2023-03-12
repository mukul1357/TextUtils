import React from 'react'

export default function Alert(props) {
  const capitalize = (letter)=>{
    let newLetter = letter.toLowerCase()
    return newLetter.charAt(0).toUpperCase() + newLetter.slice(1)
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
