import React from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

function Display({ input, answer }) {
  
  return (
    <Paper className='display'>

      <Typography className='input'>
        {input}
      </Typography>

      <Typography className='answer'>
        {answer[answer.length - 1]}
      </Typography>

    </Paper>
  )
}

const mapState = state => ({ input: state.inputs, answer: state.evaluated })

export default connect(mapState)(Display)