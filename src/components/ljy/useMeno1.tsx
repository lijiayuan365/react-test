import React, { useState, useEffect } from 'react'
import Test1 from './test1'
import Test2 from './test2'

let timer:any = null
const App = () => {
  const [count, setCount] = useState(12)
  useEffect(() => {
    timer = setInterval(() => {
      setCount((n) => {
        if (n) {
          // 3.1 倒计时每秒减少1
          return n - 1
        } else {
          // 3.2 倒计时为0时，清空倒计时
          clearInterval(timer)
          return 0
        }
      })
    }, 1000)
    // 4 组件销毁 清楚倒计时
    return () => {
      clearInterval(timer)
    }
  }, [])
  const [num, setNum] = useState(1)
  return (
    <div>
      <Test1 count={count} />
      <Test2  num={num} />
    </div>
  )
}

export default App
