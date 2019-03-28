import React from 'react'
import { connect } from 'react-redux'
import { inputAdded } from '../reducer'

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
    <button
      value={value}
      id={id}
      onClick={() => conditionalDispatch(value)}
    >
      {value}
    </button>
  )
}

const mapState = state => ({ input: state.inputs })

export default connect(mapState)(Operator)