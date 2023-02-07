import React from 'react';
import { useSelector } from 'react-redux';
import { FeaturedProducts, HotProducts, ShopByInstagram } from '../../components';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent';
import OverView from '../../components/OverView/OverView';


const HomePage = () => {

  const { productportfolio, productview, heliosmeet } = useSelector(state => state.homeData);
 
  return (
    <div>
    


      <CarouselComponent />

      <OverView
        title={productportfolio?.title}
        number={4}
        images={productportfolio?.item}
        check={'danhsach'} />

      <FeaturedProducts
        number={2}
        images={productview?.product?.image}
        inforProduct={productview?.product} 
        imageHome ={productview?.image}
        />
      <HotProducts />
      
      <ShopByInstagram />

      <OverView
        title={'helios meet'}
        number={5}
        images={heliosmeet}
        check={'meet'} />

      <div className='flex justify-center items-center'>
        <img
          src="https://cdn.shopify.com/s/files/1/0644/2958/8701/files/Screenshot_2.jpg?v=1653475476"
          alt="" 
            className='max-w-full opacity-50 object-fill'
          />
      </div>
    
    </div>
  )
}

export default HomePage
