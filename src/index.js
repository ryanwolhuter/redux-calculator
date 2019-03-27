import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { calculatorReducer } from './reducer'
import './style.css'

const store = createStore(calculatorReducer)


function Button({ value, id }) {
  return (
    <button 
      value={value}
      id={id}
      onClick={() => console.log(value)}>
      {value}
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <div className='container'>
         {/* Display */}
        <div className='display'>
          DISPLAY
        </div>
         {/* Control buttons */}
        <Button value='AC' id='clear' className='control'/>
        <Button value='=' id='equals' className='control'/>
         {/* Operator buttons */}
        <Button value='+' id='plus' className='operator'/>
        <Button value='-' id='minus' className='operator'/>
        <Button value='*' id='multiply' className='operator'/>
        <Button value='/' id='divide' className='operator'/>
        <Button value='.' id='decimal' className='operator'/>
        <Button value='(' id='left-paren' className='operator' />
        <Button value=')' id='right-paren' className='operator' />
        <Button value='**2' id='square' className='operator' />
        <Button value='**-2' id='sqrt' className='operator' />

         {/* Number buttons */}
        
        <Button value='1' id='one' className='number'/>
        <Button value='2' id='two' className='number'/>
        <Button value='3' id='three' className='number'/>
        <Button value='4' id='four' className='number'/>
        <Button value='5' id='five' className='number'/>
        <Button value='6' id='six' className='number'/>
        <Button value='7' id='seven' className='number'/>
        <Button value='8' id='eight' className='number'/>
        <Button value='9' id='nine' className='number'/>
        <Button value='0' id='zero' className='number' />
      </div>
    </div>
  )
}

render(
  <App/>,
  document.getElementById('root')
)