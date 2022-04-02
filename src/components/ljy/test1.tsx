import React from 'react'

const test1 = (props:{ count:any }) => {
  const { count } = props
  console.log('test1', count)
  return <div></div>
}

export default test1