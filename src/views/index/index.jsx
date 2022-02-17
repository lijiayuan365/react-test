/**
 * @Description: 首页
 * @Author: Neo
 * @Date: 2021-12-20
 * @LastEditTime: 2022-01-19
 * @LastEditors: Neo
 */
import './index.less'
import { observer, useStore } from '@/hooks/storeHook'
import api from '@/api/index'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import tools from '@/utils/tools'

function Index (props) {
  const navigate = useNavigate()

  const { userStore } = useStore()

  useEffect(() => {
    console.log('index props', props)
    // initData()
  }, [])

  async function initData () {
    api.getConsumer().then(res => {
    })
  }

  function toPage () {
    const query = tools.objToUrlParams({ id: '123' })
    navigate(`/test?${query}`)
  }

  return (
    <div className="v-index-index">
      <div className="content">
        <div>
          <Button onClick={toPage}>去测试页</Button>
        </div>

        {userStore.ticket}
      </div>
    </div>
  )
}

export default observer(Index)
