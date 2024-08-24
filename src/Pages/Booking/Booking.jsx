import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import usetourist from '../../Components/SectionTitle/hooks/usetourist';
import SpotCard from '../../Components/SectionTitle/SpotCard/SpotCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Booking = () => { 
    const categories = ['beaches', 'mountains', 'historical', 'museums', ' parks'];
    const{category}=useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const[tourist]=usetourist();  


    const beaches=tourist.filter(tourists=> tourists.category==='beaches')
    const mountains =tourist.filter(tourists=>tourists.category==='mountains')
    const historical =tourist.filter(tourists=>tourists.category==='historical')
    const museums =tourist.filter(tourists=>tourists.category==='museums')
    const parks =tourist.filter(tourists=>tourists.category==='parks')

    return ( 
        
        <div> 
             <Helmet><title>Tourism | Booking</title></Helmet>
        <div  className="w-[1360px] mx-auto h-[620px] ml-1 mr-1 bg-[url('https://i.ibb.co/nByVgq8/booking-spot.jpg')] bg-cover rounded-xl  justify-center">
    <div className='item-center text-white h-full text-left bg-black bg-opacity-75'>  
        
        <h1 className='pt-[220px]   text-4xl uppercase text-center  font-bold '>
       Booking TouristSpot
        </h1>  
        <p className='w-[700px]  text-center ml-80 pt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque a ratione adipisci rem architecto veritatis laudantium tenetur cumque? Repellendus impedit illum, ratione molestiae distinctio quod.</p>
        </div> 

        </div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
  <TabList>
    <Tab>Beaches</Tab>
    <Tab>Mountains and Hills</Tab>
    <Tab>Historical Sites</Tab>
    <Tab>Museums and Galleries</Tab>
    <Tab>Parks and Nature Reserves</Tab>
  </TabList>
  <TabPanel>
    <div className='grid md:grid-cols-3 gap-10'>
    {
       beaches.map(tourist =><SpotCard key={tourist._id} tourist={tourist} ></SpotCard>) 
    }
    </div>
 
  </TabPanel>
  <TabPanel>
    <div className='grid md:grid-cols-3 gap-10'>
    {
       mountains.map(tourist =><SpotCard key={tourist._id} tourist={tourist} ></SpotCard>) 
    }
    </div>
 
  </TabPanel>
  <TabPanel>
    <div className='grid md:grid-cols-3 gap-10'>
    {
      historical.map(tourist =><SpotCard key={tourist._id} tourist={tourist} ></SpotCard>) 
    }
    </div>
 
  </TabPanel>
  <TabPanel>
    <div className='grid md:grid-cols-3 gap-10'>
    {
      museums.map(tourist =><SpotCard key={tourist._id} tourist={tourist} ></SpotCard>) 
    }
    </div>
 
  </TabPanel>
  <TabPanel>
    <div className='grid md:grid-cols-3 gap-10'>
    {
       parks.map(tourist =><SpotCard key={tourist._id} tourist={tourist} ></SpotCard>) 
    }
    </div>
 
  </TabPanel>
 
  

</Tabs>








</div>
       



    );
};

export default Booking;