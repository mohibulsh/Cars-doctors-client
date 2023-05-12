import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({service}) => {
    const {_id,title,img,price} =service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p><span className='text-xl font-bold text-orange-500'>
            Price : </span>${price}</p>
          <div className="card-actions justify-end text-3xl">
             <span className='cursor-pointer hover:text-orange-700'>
                <AiOutlineArrowRight/></span>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;