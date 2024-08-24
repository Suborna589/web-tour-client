import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Featured from './Featured/Featured';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>  
<Helmet>
    <title>Tourism | Home</title>
</Helmet>
         <Banner></Banner> 
         <Category></Category> 
         <Featured></Featured>
        </div> 
        

        
    );
};

export default Home;