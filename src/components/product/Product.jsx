


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./product.scss";

//images
import chevron from "../../assets/icon/arrowSchewron.svg";


export default function Product({props, title}){
    return(
        <div data-scroll data-scroll-speed={2}>
            <div className="product-title">
                <h3>{title}</h3>
                <a href="#" target="_blank" rel="noopener noreferrer"><span>Больше товаров</span><img src={chevron} alt="" /></a>
            </div>
            <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            breakpoints= {{
                320: {
                    slidesPerView: 1,
                },
                500: {
                    slidesPerView: 2,
                },
                700: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            pagination={{ 
                clickable: true,
                dynamicBullets:true,
            }}
            // navigation
            speed={700}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='swiper__wrapper'
          >
            {props?.map((item) => (
            <SwiperSlide key={item.id} className='product-swiper'>
                <div className="product-swiper-img"><img src={item.img} alt="" /></div>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}