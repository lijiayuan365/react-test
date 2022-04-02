import { useStore } from '@/hooks/storeHook'
import React, { useState } from 'react'
import './dogButton.less'
interface propsType {
  name:string,
  key?:string,
}
function DogButton (props:propsType) {
  let key = false
  const { testKey } = useStore()
  const [str, setStr] = useState('ff')
  function click () {
    console.log('dd')
    setStr('dd')
    testKey.setKey('fff')
  }
  return (
    <button className='dog-btn' onClick={click}>{props.name}{testKey.key}{str}{key ? 'bb' : 'aa'}</button>
  )
}

export default DogButton
