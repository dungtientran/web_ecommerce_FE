
import React, { useState } from 'react'
import { WrapperInputForm } from './styled'

const InputForm = ({placeholder = 'Nhập text', ...rests}) => {
    const [valueInput, setValueInput] = useState('')
  return (
    <WrapperInputForm placeholder={placeholder} value={valueInput} {...rests}/>
  )
}

export default InputForm