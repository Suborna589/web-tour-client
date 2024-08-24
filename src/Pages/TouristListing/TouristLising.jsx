import React from 'react';
import usetourist from '../../Components/SectionTitle/hooks/usetourist';
import { Helmet } from 'react-helmet-async';

const TouristLising = () => { 
    const [tourist]=usetourist();
    
    const beaches=tourist.filter(tourists=> tourists.category==='beaches')
    const mountains =tourist.filter(tourists=>tourists.category==='mountains')
    const historical =tourist.filter(tourists=>tourists.category==='historical')
    const museums =tourist.filter(tourists=>tourists.category==='museums')
    const parks =tourist.filter(tourists=>tourists.category==='parks')
    return (
        <div> 
         <Helmet><title>Tourism | Tourist Spot Listing</title></Helmet>
         <div  className="w-[1360px] mx-auto h-[620px] ml-1 mr-1 bg-[url('https://i.ibb.co/mzn2PJK/Tourist-List.jpg')] bg-cover rounded-xl  justify-center">
    <div className='item-center text-white h-full text-left bg-black bg-opacity-75'>  
        
        <h1 className='pt-[220px]   text-4xl uppercase text-center  font-bold '>
        Tourist Spot Listing
        </h1>  
        <p className='w-[700px]  text-center ml-80 pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque a ratione adipisci rem architecto veritatis laudantium tenetur cumque? Repellendus impedit illum, ratione molestiae distinctio quod.</p>
        </div> 

        </div>
            
        </div>
    );
};

export default TouristLising;