import { Spin } from 'antd'
import React from 'react'

const Loading = ({ children, isLoading, delay = 0 }) => {
  return (
    <div className='w-full'>
      <Spin spinning={isLoading} delay={delay}>
        {children}
      </Spin>
    </div>
  )
}

export default Loading