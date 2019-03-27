import React from 'react'
import { connect } from 'react-redux'
import { evaluationStarted, evaluationCompleted } from '../reducer'

function Equals({ value, id, dispatch }) {

  function startAndCompleteEvaluation() {
    dispatch(evaluationStarted())
    return dispatch(evaluationCompleted())
  }

  return (
    <button
      value={value}
      id={id}
      onClick={() => startAndCompleteEvaluation()}
    >
      {value}
    </button>
  )
}

export default connect()(Equals)