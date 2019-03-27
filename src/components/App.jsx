import React from 'react'
import Display from './Display'
import Clear from './Clear'
import Equals from './Equals'
import Operator from './Operator'
import Number from './Number'

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        {/* Display */}
        <Display />
        {/* Control buttons */}
        <Clear value='AC' id='clear' className='control' />
        <Equals value='=' id='equals' className='control' />
        {/* Operator buttons */}
        <Operator value='+' id='plus' className='operator' />
        <Operator value='-' id='minus' className='operator' />
        <Operator value='*' id='multiply' className='operator' />
        <Operator value='/' id='divide' className='operator' />
        <Operator value='.' id='decimal' className='operator' />
        <Operator value='(' id='left-paren' className='operator' />
        <Operator value=')' id='right-paren' className='operator' />
        <Operator value='**2' id='square' className='operator' />
        <Operator value='**-2' id='sqrt' className='operator' />

        {/* Number buttons */}

        <Number value='1' id='one' className='number' />
        <Number value='2' id='two' className='number' />
        <Number value='3' id='three' className='number' />
        <Number value='4' id='four' className='number' />
        <Number value='5' id='five' className='number' />
        <Number value='6' id='six' className='number' />
        <Number value='7' id='seven' className='number' />
        <Number value='8' id='eight' className='number' />
        <Number value='9' id='nine' className='number' />
        <Number value='0' id='zero' className='number' />
      </div>
    </div>
  )
}