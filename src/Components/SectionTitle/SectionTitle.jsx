import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'> 
            {/* <p>{subheading}</p>  */}
            <h3 className='text-3xl text-black  uppercase border-y-4 py-4'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;