/**
 * @Description: 首页
 * @Author: Neo
 * @Date: 2021-12-20
 * @LastEditTime: 2022-01-19
 * @LastEditors: Neo
 */
import './index.less'
import { observer, useStore } from '@/hooks/storeHook'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, DatePicker } from 'antd'
import DogButton from '@/components/ljy/dogButton'
import ParentCom from '@/components/ljy/parentCom';
import tools from '@/utils/tools'
import api from '@/api'

function Index (props: any) {
  const navigate = useNavigate()

  const { userStore } = useStore()

  useEffect(() => {
    console.log('index props', props)
    // initData()
  }, [])

  async function initData () {
    // get index data from api
    api.getDogList().then(res => {
      debugger
    })
  }

  function toPage () {
    const query = tools.objToUrlParams({ id: '123' })
    navigate(`/test?${query}`)
  }

  return (
    <div className="v-index-index">
      <ParentCom />
      <div className='wrap'>
        <Button onClick={toPage}>去测试页</Button>
        <DogButton name='ss'></DogButton>
      </div>
      <div className='wrap'>
        <DatePicker />
      </div>
      <div className='wrap'>
        {userStore.ticket}
      </div>

    </div>
  )
}

export default observer(Index)
