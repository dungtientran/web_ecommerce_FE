import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size, styleButton, styleTextButton, textButton}) => {
  return (
    <Button
        size={size}
        style={styleButton}
    >
    <span style={styleTextButton}>{textButton}</span>
    </Button>
  )
}

export default ButtonComponent
