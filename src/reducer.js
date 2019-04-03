const INPUT_ADDED = 'INPUT_ADDED'
const EVALUATION_STARTED = 'EVALUATION_STARTED'
const EVALUATION_COMPLETED = 'EVALUATION_COMPLETED'
const INPUT_CLEARED = 'INPUT_CLEARED'

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
      const answer = evaluate(state.expressions[state.expressions.length - 1])
      
      return {
        ...state,
        evaluated: [...state.evaluated.concat(answer)],
        inputs: [...state.inputs.concat(answer)]
      }
    case INPUT_CLEARED:
      return {
        ...state,
        inputs: [],
        evaluated: []
      }
    default:
      return state
  }
}

export function inputAdded(input) {
  return {
    type: INPUT_ADDED,
    payload: input
  }
}

export function evaluationStarted() {
  return {
    type: EVALUATION_STARTED,
    payload: null
  }
}

export function evaluationCompleted() {
  return {
    type: EVALUATION_COMPLETED,
    payload: null
  }
}

export function inputCleared() {
  return {
    type: INPUT_CLEARED,
    payload: null
  }
}

export function evaluate(expression) {
  let answer

  try {
    answer = eval(expression)
  }
  catch (error) {
    return null
  }

  return answer
}