import React from 'react';
import { Button } from 'reactstrap';

const adminManage = ({name, email}) => {


  return (
    <div className='flex justify-between items-center text-lg'>
      <div className='basis-1/4 text-center px-2 py-1'>{name}</div>
      <div className='basis-1/2 text-center px-2 py-1'>{email}</div>
      <div className='basis-1/4 text-center px-2 py-1'><Button size='sm' color='danger' outline>Xóa</Button></div>
    </div>
  )
}

export default adminManage
