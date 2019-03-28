import React from 'react'
import { connect } from 'react-redux'
import { inputAdded } from '../reducer'
import Button from '@material-ui/core/Button'

// The only non-numeric an operator can follow is ')'
const nonNumeric = ['+', '-', '*', '/', '.', '(',]

function Operator({ value, id, dispatch, input }) {

  function conditionalDispatch(value) {
    const lastInput = input[input.length - 1]

    if (!lastInput || nonNumeric.includes(lastInput)) {
      return null
    }
    
    return dispatch(inputAdded(value))
  }

  return (
    <Button
      value={value}
      id={id}
      onClick={() => conditionalDispatch(value)}
      variant='contained'
    >
      {value}
    </Button>
  )
}

const mapState = state => ({ input: state.inputs })

export default connect(mapState)(Operator)