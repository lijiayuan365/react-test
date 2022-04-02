import React,{useState} from 'react';
import Child from './Child';
function Comp1(){
  const [count,setCount] = useState(0);
  const [num,setNum] = useState(0);
  return (
    <div>
      <p>{num}</p>
      <button onClick={()=>{ setNum(num+1) }}>父组件单独使用值修改</button>
      <p>{count}</p>
      <button onClick={()=>{ setCount(count+1) }}>父子公用值修改</button>

      <Child count={count} />
    </div>
  )
}
export default Comp1;

