import React, { useCallback, useMemo } from 'react';
function Child(props:any){
  function workingCount(){
    console.log('子组件函数触发');
    return props.count+'_child'
  }
  let child_count = useMemo(() => workingCount(),[props.count]) ;
  // let child_count = useCallback(()=>{
  //   return workingCount()
  // },[props.count])
  return (
    <div> <div>{child_count}</div> </div>
  )
}
export default Child;