import React from 'react'
import { connect } from 'react-redux'
import { inputAdded } from '../reducer'
import Button from '@material-ui/core/Button'

function Number({ value, id, dispatch }) {
  return (
    <Button
      value={value}
      id={id}
      onClick={() => dispatch(inputAdded(value))}
      variant='contained'
      >
      {value}
    </Button>
  )
}

export default connect()(Number)
