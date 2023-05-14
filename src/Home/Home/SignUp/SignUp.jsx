import React, { useContext, useState } from 'react';
import loginIcon from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const SignUp = () => {
    const {createUsers}=useContext(AuthContext)
    const [success,setSuccess]=useState('')
    const [error,setError]=useState('')
    const handlerSignUp = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;
        const name =form.name.value;
        console.log(name,email,password)
        createUsers(email,password)
        .then(result=>{
            const signUpUsers = result.user;
            console.log(signUpUsers)
            setSuccess('sign up successfully')
            form.reset()
        })
        .catch(error=>{
          setError(error.message)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2">
                    <img className='Lg:me-60' src={loginIcon} alt="" />
                </div>
                <div className="card w-full lg:w-1/2 lg:ml-24  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-center text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handlerSignUp} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' required type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' required type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className='pt-2'>Already have an account
                                <Link className='font-bold text-orange-500 ml-2 hover:text-orange-700 cursor-pointer' to='/login'
                                >Login</Link></p>
                        </form>
                        <p className='text-red-500 py-2'>{error}</p>
                        <p className='text-green-500'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;