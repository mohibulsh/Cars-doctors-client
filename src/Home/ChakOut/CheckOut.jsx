import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
const CheckOut = () => {
    const {_id, title, price,img} = useLoaderData()
    const {user} =useContext(AuthContext)
    const handlerCheckOut = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = user?.email;
        const date = form.date.value;
        const price2 = form.price.value;
        const bookCheckOut ={
            name,
            phone,
            email,
            price2,
            date,
            service_id:_id,
            title,
            img
        }
        fetch('https://car-doctors-server-two.vercel.app/bookings',{
            method:"POST",
            headers:{
             'Content-Type': 'application/json'
            },
            body:JSON.stringify(bookCheckOut)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged === true){
                Swal.fire({
                    title: 'success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset()
            }
        })
        
    }
    return (
        <div>
            <div className="card  shadow-2xl bg-base-100 py-8">
                <h3 className='text-3xl text-center text-orange-500'>check out the service  {title}</h3>
                <form onSubmit={handlerCheckOut}>
                    <div className="w-9/12 card-body mx-auto py-24 ">
                       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pnone Number</span>
                            </label>
                            <input type="number" name='phone' required defaultValue={user?.phoneNumber} placeholder="Number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' readOnly defaultValue={price} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' placeholder='Date' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Plan</span>
                            </label>
                            <input type="text" name='text' placeholder='Plan'  className="input input-bordered" />
                        </div>
                       </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-block btn-primary' type="submit" value="Order Confirm" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;