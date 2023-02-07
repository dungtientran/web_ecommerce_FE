import React from 'react';
import { useSelector } from 'react-redux';
import { UncontrolledCarousel } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './BannerStrap.css';

const BannerStrap = () => {

    const {banner} = useSelector(state => state.homeData)

    const bannerView = []

    for (let i of banner) {
        bannerView.push({
            src: i.banner,
            altText: '',
            caption: ''
        })
    } 
    return (
        <div>
            <UncontrolledCarousel items={bannerView}/>  
        </div>
    )
}


export default BannerStrap;