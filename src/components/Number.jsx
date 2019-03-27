import React from 'react'
import { connect } from 'react-redux'
import { inputAdded } from '../reducer'

function Number({ value, id, dispatch }) {
  return (
    <button
      value={value}
      id={id}
      onClick={() => dispatch(inputAdded(value))}>
      {value}
    </button>
  )
}

export default connect()(Number)
