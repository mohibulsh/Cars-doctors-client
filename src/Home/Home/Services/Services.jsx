import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])
  const [ase, setAse] = useState(true)
  const [search, setSearch] = useState('')
  const searchRef = useRef(null)
  http://localhost:5000/services
  useEffect(() => {
    fetch(`https://car-doctors-server-two.vercel.app/services?sort=${ase ? 'ase' : 'dse'}&search=${search}`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [ase,search])
  const handlerSearch = (event) =>{
    setSearch(searchRef.current.value)
  }

  return (
    <div className='my-20'>
      <div className='text-center space-y-3'>
        <h3 className='text-3xl text-orange-500 font-bold'>Service</h3>
        <h1 className='text-5xl font-bold'>Our Service Area</h1>
        <p>the majority have suffered alteration in some form, by injected humour,
          or randomised <br /> words which don't look even slightly believable. </p>
        <div className="form-control">
          <div className="input-group">
            <input type="text" ref={searchRef}  placeholder="Search…" className="input input-bordered" />
            <button className="btn btn-square" onClick={handlerSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        <button className='btn btn-primary' onClick={() => setAse(!ase)}>{ase ? 'Price High to Low' : 'Price Low to High'}</button>
      </div>
      <div className='grid mt-12 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {
          services.map(service => <ServiceCard key={service._id}
            service={service}
          >
          </ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;