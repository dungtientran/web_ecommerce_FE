import React from 'react'
import Slider from 'react-slick';
import { Button } from 'reactstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderShow.css';
import { useNavigate } from 'react-router-dom';


const SliderShow = ({ number, images, check }) => {
    const navigate = useNavigate()
    let settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: number,
        lazyLoad: 'ondemand',
    };
    return (
        <div className=''>
            <Slider {...settings}>
                
                {images?.map((item, index) => (
                    <div
                        className='relative img-slider overflow-hidden cursor-pointer '
                        key={index}>
                        <div>
                            <img
                                src={item?.image || item}
                                alt={item?.name}
                                className={check==='meet' ? 'imgSliderMeet' : 'imgSliderList'} />
                        </div>
                        {check === 'danhsach' ? (
                            <div    
                                className='absolute z-20 top-[50%] left-[50%] translate-x-[-50%] text-white flex justify-center flex-col items-center uppercase w-full tranferTop'>
                                <p
                                    className=' text-[8px] sm:text-lg lg:text-xl w-full text-center'>
                                    {item?.name}
                                </p>
                                <button
                                    onClick={() => navigate(`/product/${item?.id}`)}
                                    className=' sm:px-4 sm:py-3 text-[8px] sm:text-lg lg:text-xl uppercase bg-white text-black'>
                                    Xem thêm
                                </button>
                            </div>
                        )
                        : (
                            check === 'meet' ? (
                            <div className='flex justify-center items-center'>
                                <p className='text-white uppercase pt-3'> helios x {item?.name}</p>
                            </div>
                            ) : ''
                        )}
                     
                      
                    </div>
                ))}
                <div></div>

            </Slider>
        </div>
    );

}

export default SliderShow
