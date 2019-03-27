const INPUT_ADDED = 'INPUT_ADDED'
const EVALUATION_STARTED = 'EVALUATION_STARTED'
const EVALUATION_COMPLETED = 'EVALUATION_COMPLETED'

const initialState = {
  inputs: [],
  expressions: [],
  evaluated: []
}

export function calculatorReducer(state = initialState, action) {

  switch (action.type) {
    case INPUT_ADDED:
      return {
        ...state,
        inputs: [...state.inputs.concat(action.payload)]
      }
    case EVALUATION_STARTED:
      return {
        ...state,
        expressions: [...state.expressions.concat(state.inputs.join(''))],
        inputs: []
      }
    case EVALUATION_COMPLETED:
      return {
        ...state,
        evaluated: [
          ...state.evaluated.concat(
            evaluate(state.expressions[state.expressions.length - 1])
          )]
      }
    default:
      return state
  }
}

function inputAdded(input) {
  return {
    type: INPUT_ADDED,
    payload: input
  }
}

function evaluationStarted() {
  return {
    type: EVALUATION_STARTED,
    payload: null
  }
}

function evaluationCompleted() {
  return {
    type: EVALUATION_COMPLETED,
    payload: null
  }
}

function evaluate(expression) {
  return eval(expression)
}