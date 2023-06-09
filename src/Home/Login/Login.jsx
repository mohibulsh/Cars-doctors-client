import React, { useContext, useState } from 'react';
import loginIcon from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    const {logInUsers}=useContext(AuthContext)
    const [success,setSuccess]=useState('')
    const [error,setError]=useState('')
    const handlerLogin = (event) =>{
        setError('')
        setSuccess('')
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password)
        logInUsers(email,password)
        .then(result=>{
            const logUsers = result.user;
            console.log(logUsers)
            setSuccess('log in successfully')
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
                        <h1 className='text-center text-3xl font-bold'>Login</h1>
                        <form onSubmit={handlerLogin} >
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
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className='pt-2'>New to the cars Doctors
                              <Link className='font-bold text-orange-500 ml-2 hover:text-orange-700 cursor-pointer' to='/signup'
                            >Sign Up</Link></p>
                        </form>
                        <p className='text-red-500 py-2'>{error}</p>
                        <p className='text-green-500'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;