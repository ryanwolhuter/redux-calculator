import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Display from './Display'
import Paren from './Paren'
import Operator from './Operator'
import Clear from './Clear'
import Number from './Number'
import Equals from './Equals'
import Decimal from './Decimal'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fed9ca'
    },
    secondary: {
      main: '#c5c5c5'
    },
    background: {
      paper: '#ffefe0'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 24,
    fontFamily: 'Orbitron'
  }
})

export default function App() {

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className='container'>
            <Display></Display>

            <Paren value='(' className='paren'>(</Paren>
            <Paren value=')' className='paren'>)</Paren>

            <Operator value='**2' className='operator'>
              x<sup>2</sup>
            </Operator>

            <Clear value='AC' className='control'>AC</Clear>

            <Number value='1' className='number'>1</Number>
            <Number value='2' className='number'>2</Number>
            <Number value='3' className='number'>3</Number>

            <Operator value='/' className='operator'>/</Operator>

            <Number value='4' className='number'>4</Number>
            <Number value='5' className='number'>5</Number>
            <Number value='6' className='number'>6</Number>

            <Operator value='*' className='operator'>*</Operator>

            <Number value='7' className='number'>7</Number>
            <Number value='8' className='number'>8</Number>
            <Number value='9' className='number'>9</Number>

            <Operator value='-' className='operator'>-</Operator>

            <Number value='0' className='number'>0</Number>
            <Decimal value='.' className='operator'>
              <strong>.</strong>
            </Decimal>

            <Equals value='=' className='control'>=</Equals>

            <Operator value='+' className='operator'>+</Operator>
          </div>
        </div>
      </MuiThemeProvider>
    </>
  )
}