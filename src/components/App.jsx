import React from 'react'
import Display from './Display'
import Paren from './Paren'
import Operator from './Operator'
import Clear from './Clear'
import Number from './Number'
import Equals from './Equals'
import Decimal from './Decimal'

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Display />

        <Paren value='(' id='left-paren' className='paren' />
        <Paren value=')' id='right-paren' className='paren' />
        <Operator value='**2' id='square' className='operator' />

        <Clear value='AC' id='clear' className='control' />

        <Number value='1' id='one' className='number' />
        <Number value='2' id='two' className='number' />
        <Number value='3' id='three' className='number' />

        <Operator value='/' id='divide' className='operator' />

        <Number value='4' id='four' className='number' />
        <Number value='5' id='five' className='number' />
        <Number value='6' id='six' className='number' />

        <Operator value='*' id='multiply' className='operator' />

        <Number value='7' id='seven' className='number' />
        <Number value='8' id='eight' className='number' />
        <Number value='9' id='nine' className='number' />

        <Operator value='-' id='minus' className='operator' />

        <Number value='0' id='zero' className='number' />
        <Decimal value='.' id='decimal' className='operator' />

        <Equals value='=' id='equals' className='control' />

        <Operator value='+' id='plus' className='operator' />
      </div>
    </div>
  )
}