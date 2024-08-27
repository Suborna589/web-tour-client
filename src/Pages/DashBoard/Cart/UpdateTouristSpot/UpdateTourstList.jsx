import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Components/SectionTitle/hooks/useAxiosSecure';
import useAxiosPublic from '../../../../Components/SectionTitle/hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`





const UpdateTourstList = () => {
    const {register, handleSubmit,reset} = useForm()
    const {tourist_spot_name, location,category,description,average_cost,_id}=useLoaderData();
    const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();

      const onSubmit =  async (data) => {
       
        console.log(data)
        //image upload imagbb
        const imageFile={image:data.image[0]}
        const res =await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                "content-type":'multipart/form-data'
            }
        });

        if(res.data.success){
            const touristSpot={
                tourist_spot_name:data.tourist_spot_name,
                location:data.location,
                category:data.category,
                average_cost:parseFloat(data.average_cost),
                description:data.description,
                image:res.data.data.display_url

            }

            const  touristRes=await axiosSecure.patch(`/tourist/${_id}`,touristSpot);
            console.log(touristRes.data)
            
            if(touristRes.data.modifiedCount>0){
                // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.tourist_spot_name}is updated to the list`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }


        }
        console.log(res.data)
      }
    

    return (
        <div>
            <SectionTitle heading="Update AnList"></SectionTitle>
            <div>


<form onSubmit={handleSubmit(onSubmit)}>
<div className='flex gap-6'>

<div className="form-control w-full my-4">
<label className="label">
<span className="label-text">Tourist Spot Name*</span>
</label>
<input  defaultValue={tourist_spot_name}  {...register("tourist_spot_name")} type="text" placeholder="Tourist Spot Name" className="input input-bordered w-full " />
</div>
    <div className="form-control w-full my-4">
<label className="label">
<span className="label-text">Location*</span>
</label>
<input defaultValue={location} {...register("location")} type="text" placeholder="location" className="input input-bordered w-full " />
</div>

</div>



<div className='flex gap-6'>

{/* category */}
<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Category*</span>
</label>
<select   defaultValue={category}  {...register("category")} className="select select-bordered w-full ">
<option disabled selected>Select a Category</option>
<option value="beaches">Beaches</option>
<option value="mountains">Mountains and Hills</option>
<option value="historical">Historical Sites</option>
<option value="museums">Museums and Galleries</option>
<option value="parks">Parks and Nature Reserves</option>
</select>
</div>
{/* location */}

{/* price */}

<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Average Cost*</span>
</label>
<input  defaultValue={average_cost}  {...register("average_cost")} type="text" placeholder="Tourist Spot Name" className="input input-bordered w-full " />
</div>


</div>
{/* Tourist Spot details */}

<label className="form-control">
<div className="label">
<span className="label-text">Tourist Spot Details</span>
</div>
<textarea   defaultValue={description}  {...register("description")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

</label> 

<div   className="form-control w-full my-6">
<input    {...register("image",{required:true})}  type="file" className="file-input w-full max-w-xs" />
</div>








<button className='btn'>
Update Tourist Spot List
{/* <FaUtensils className='ml-2'></FaUtensils> */}

</button>
</form>

</div>
        </div>
    );
};

export default UpdateTourstList;