import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services ,setServices] =useState([])
    const [ase ,setAse]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/services?sort=${ase?'ase':'dse'}`)
        .then(res => res.json())
        .then (data => setServices(data))
    },[ase])
    return (
        <div className='my-20'>
            <div className='text-center space-y-3'>
                <h3 className='text-3xl text-orange-500 font-bold'>Service</h3>
                 <h1 className='text-5xl font-bold'>Our Service Area</h1>
                 <p>the majority have suffered alteration in some form, by injected humour,
                     or randomised <br /> words which don't look even slightly believable. </p>

                     <button className='btn btn-primary' onClick={()=>setAse(!ase)}>{ase?'Price High to Low':'Price Low to High'}</button>
            </div>
          <div className='grid mt-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
          {
              services.map(service =><ServiceCard key={service._id}
                service={service}
              >
              </ServiceCard>)
            }
          </div>
        </div>
    );
};

export default Services;