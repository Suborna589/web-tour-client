import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'; 
import tour1 from '../../../assets/tour-1.jpg'
import './Featured.css' 
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 bg-fixed  my-20'>
            <SectionTitle heading={"Featured TouristSpot"}></SectionTitle> 
            <div className='md:flex  bg-slate-600 bg-opacity-75  justify-center items-center pb-20  pt-12 px-32'>
                <div> 
                    <img src={tour1}  className=' md:w-9/12 h-9/12'
                    alt="" />

                </div> 
                <div className='md:ml-10 '>
                    <p>Aug 20,2029</p> 
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, velit totam commodi architecto nisi reprehenderit facere vero molestias perspiciatis inventore incidunt voluptatum repudiandae culpa expedita sunt sequi maxime sit vitae temporibus molestiae natus recusandae debitis. Id animi vitae inventore tempora vero esse, blanditiis neque iusto assumenda necessitatibus dolore recusandae error illum non eos excepturi eligendi beatae fugiat sit.</p> 
                    <button className="btn btn-outline uppercase border-0 border-b-4 mt-4">Booking Now</button>
                </div>
            </div>
        </div> 

    );
};

export default Featured;