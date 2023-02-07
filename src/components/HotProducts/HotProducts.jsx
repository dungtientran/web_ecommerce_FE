import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HotProducts = () => {
  const { hotproduct } = useSelector(state => state.homeData)
  const navigate = useNavigate()
  return (
    <div className='text-white py-[100px]'>
      <h3 className='uppercase text-center text-3xl'>{hotproduct?.title}</h3>
      <div className='flex flex-col md:flex-row justify-evenly items-center py-[40px]'>
        {hotproduct?.item?.map((item, index) => (
          <div
            key={index}
            className='px-[20px] md:px-0 md:w-[40%] flex flex-col mb-[20px]'
          >
            <div>
              <video src={item?.src} loop autoPlay muted className='object-cover w-full cursor-pointer' onClick={() => navigate(`/product/${item?.id}`)}></video>
            </div>
            <div className='mt-3'>
              <h4 >{item?.name}</h4>
              <p className='text-sm'>{item?.title}</p>
              <div className='mt-6'>
                <button className='px-4 py-3 bg-white text-black hover:bg-black hover:text-white duration-500'>MUA NGAY</button>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default HotProducts