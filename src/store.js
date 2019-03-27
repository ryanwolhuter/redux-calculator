import { calculatorReducer } from './reducer'
import { createStore } from 'redux'

export const store = createStore(calculatorReducer)
