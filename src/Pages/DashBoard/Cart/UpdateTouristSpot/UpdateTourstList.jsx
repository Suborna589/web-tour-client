import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const UpdateTourstList = () => {
    const list=useLoaderData();
    console.log(list)

    return (
        <div>
            <SectionTitle heading="Update AnList"></SectionTitle>
        </div>
    );
};

export default UpdateTourstList;