import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, setBookings, bookings, }) => {
    const { _id, date, email, name, phone, price2, title, img,status } = booking;
 
    const handlerDelete = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                            cancelButton: 'btn btn-danger'
                        },
                        buttonsStyling: false
                    })

                    swalWithBootstrapButtons.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes !',
                        cancelButtonText: 'No !',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                        } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            swalWithBootstrapButtons.fire(
                                'Cancelled',
                                'Your imaginary file is safe :)',
                                'error'
                            )
                        }
                    })
                }


            })
    }
    // confirm booking
    const handlerConfirmBooking = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({status:'Confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0 ){
                const remaining = bookings.filter(booking=>booking._id !==id)
                const update =bookings.find(booking=>booking._id ==id)
                update.status="Confirm"
                const newBookings = [update,...remaining]
                setBookings(newBookings)
                console.log(newBookings)
            }
        })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar ">
                        <div className="w-12 md:w-20 rounded">
                            {
                                img && <img src={img} />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="md:font-bold font-sm ">{name}</div>
                        <div className="text-sm md:font-bold">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm md:text-2xl"> {title}</div>
                <div className="text-sm md:font-bold"> Service date {date}</div>
            </td>
            <td>$ {price2}</td>
            <th>
                {
                    status =="Confirm"?<span className='text-blue-700'>CONFIRMED</span>:
                    <button onClick={()=>handlerConfirmBooking(_id)} className="btn  btn-ghost btn-xs">please Confirm</button>
                    }
            </th>
            <td>
                <button onClick={() => handlerDelete(_id)} className="btn btn-circle btn-outline btn-sm ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default BookingRow;