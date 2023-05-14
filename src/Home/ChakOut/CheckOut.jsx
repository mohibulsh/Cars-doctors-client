import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { title, price } = useLoaderData()
    return (
        <div>
                    <div className="card  shadow-2xl bg-base-100 py-8">
                       <h3 className='text-3xl text-center text-orange-500'>check out the service : {title}</h3>
                        <form>
                        <div className="w-9/12 card-body mx-auto py-24">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-block btn-primary' type="submit" value="Order Confirm" />
                            </div>
                        </div>
                         <div className="w-9/12 card-body mx-auto py-24">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
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