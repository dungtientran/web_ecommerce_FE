import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getHomeData } from '../../redux/actions/homeAction';
import { Footer, Search } from '../../components';
import Header from '../../components/Header/Header';

const Home = () => {

  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.isOpen)
 
  useEffect(() => {
    dispatch(getHomeData())
  }, [dispatch])

  return (
    <div className='bg-black relative'>
      <Header />
      <Outlet />
      {isOpen &&
        <div className='fixed top-0 z-50 left-0 right-0'>
          <Search />
        </div>
      }
      <Footer />
    </div>
  )
}

export default Home