import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';
import spot4 from '../../../assets/spot-4.jpg'
import spot9 from '../../../assets/spot-9.jpg'
import spot12 from '../../../assets/spot-12.jpg'
import spot19 from '../../../assets/spot-19.jpg'
import spot13 from '../../../assets/spot-13.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
    <section> 
        <SectionTitle  heading={"Boking Online"}>
           
        </SectionTitle>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 max-w-screen-lg  "
      >
     
        <SwiperSlide> <img src={spot4} className='h-80' alt="" />
        <h2 className='uppercase text-3xl text-center text-white -mt-44'>Bangladesh</h2>
        </SwiperSlide>
        <SwiperSlide> <img src={spot9} className='h-80'alt="" />
        <h2 className='uppercase text-3xl text-center text-white -mt-44'>Bangladesh</h2>
        </SwiperSlide>
        <SwiperSlide> <img src={spot12}  className='h-80' alt="" />
        <h2 className='uppercase text-3xl text-center text-white -mt-44'>Bangladesh</h2>
        </SwiperSlide> 
        <SwiperSlide> <img src={spot19 }className='h-80' alt="" /> 
        <h2 className='uppercase text-3xl text-center text-white -mt-44'>Bangladesh</h2>
        </SwiperSlide> 
        <SwiperSlide> <img src={spot13} className='h-80' alt="" /> 
        <h2 className='uppercase text-3xl text-center text-white -mt-16'>Bangladesh</h2>
        </SwiperSlide> 
    
      
      </Swiper>






    </section>
    );
};

export default Category;