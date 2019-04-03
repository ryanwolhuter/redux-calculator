import React from 'react'
import { connect } from 'react-redux'
import { inputCleared } from '../reducer'
import Button from '@material-ui/core/Button'

function Clear({ value, children, dispatch }) {
  return (
    <Button
      value={value}
      onClick={() => dispatch(inputCleared())}
      variant='contained'
      color='secondary'
    >
      {children}
    </Button>
  )
}

export default connect()(Clear)