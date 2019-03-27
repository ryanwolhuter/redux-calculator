import React from 'react'
import { connect } from 'react-redux'
import { inputCleared } from '../reducer'

function Clear({ value, id, dispatch }) {
  return (
    <button
      value={value}
      id={id}
      onClick={() => dispatch(inputCleared())}
    >
      {value}
    </button>
  )
}

export default connect()(Clear)