import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingRow from './BookingRow/BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const url = `https://car-doctors-server-two.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])
    return (
        <div>
            <div className="text-5xl">Booking iteams {bookings.length}</div>
            <div className="overflow-x-auto w-full my-4">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                     {
                        bookings.map(booking=><BookingRow key={bookings._id}
                        booking={booking}
                        setBookings={setBookings}
                        bookings={bookings}
                        />)
                     }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;