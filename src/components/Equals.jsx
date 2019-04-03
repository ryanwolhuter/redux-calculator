import React from 'react'
import { connect } from 'react-redux'
import { evaluationStarted, evaluationCompleted } from '../reducer'
import Button from '@material-ui/core/Button'

function Equals({ value, children, dispatch }) {

  function startAndCompleteEvaluation() {
    dispatch(evaluationStarted())
    return dispatch(evaluationCompleted())
  }

  return (
    <Button
      value={value}
      onClick={() => startAndCompleteEvaluation()}
      variant='contained'
      color='secondary'
    >
      {children}
    </Button>
  )
}

export default connect()(Equals)