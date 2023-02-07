import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getHomeData } from '../../redux/actions/homeAction';
import Footer from '../../components/Footer/Footer';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import Loading from '../../components/LoadingComponent/Loadingt'


const Home = () => {

  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.isOpen)
  const { isGetHomeData } = useSelector(state => state.homeData)

  useEffect(() => {
    dispatch(getHomeData())
  }, [dispatch])

  return (
    <Loading isLoading={!isGetHomeData}>
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
    </Loading>
  )
}

export default Home