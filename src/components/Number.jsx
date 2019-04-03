import React from 'react'
import { connect } from 'react-redux'
import { inputAdded } from '../reducer'
import Button from '@material-ui/core/Button'

function Number({ value, children, dispatch }) {
  return (
    <Button
      value={value}
      onClick={() => dispatch(inputAdded(value))}
      variant='contained'
      color='primary'
      >
      {children}
    </Button>
  )
}

export default connect()(Number)
