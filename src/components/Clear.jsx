import React from 'react'
import { connect } from 'react-redux'
import { inputCleared } from '../reducer'
import Button from '@material-ui/core/Button'

function Clear({ value, id, dispatch }) {
  return (
    <Button
      value={value}
      id={id}
      onClick={() => dispatch(inputCleared())}
      variant='contained'
      color='secondary'
    >
      {value}
    </Button>
  )
}

export default connect()(Clear)