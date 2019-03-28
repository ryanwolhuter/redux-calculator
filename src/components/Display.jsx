import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'

function Display({ input, answer }) {
  return (
    <Paper className='display'>
      {input}
      <br />
      {answer}
    </Paper>
  )
}

const mapState = state => ({ input: state.inputs, answer: state.evaluated })

export default connect(mapState)(Display)