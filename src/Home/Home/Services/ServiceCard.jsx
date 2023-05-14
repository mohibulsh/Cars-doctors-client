import React from 'react';
import { Link } from 'react-router-dom';

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
             <Link to={`/checkout/${_id}`} className='cursor-pointer '>
             <button  className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;