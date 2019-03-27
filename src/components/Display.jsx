import React from 'react'
import { connect } from 'react-redux'

function Display({ input, answer }) {
  return (
    <div className='display'>
      {input}
      <br />
      {answer}
    </div>
  )
}

const mapState = state => ({ input: state.inputs, answer: state.evaluated })

export default connect(mapState)(Display)