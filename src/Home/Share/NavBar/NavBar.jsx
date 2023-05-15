import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { FcSearch } from "react-icons/fc";
import { AiOutlineShopping} from "react-icons/ai";
import { AuthContext } from '../../../Provider/AuthProvider';


const NavBar = () => {
    const {logOut,user}=useContext(AuthContext)
    const handerLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    const navIteam = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {
           user?.email?<li><Link onClick={handerLogOut}>Log out</Link></li>:
            <li><Link to='/login'>LogIn</Link></li> 
        }
    </>
    return (
        <div className="navbar bg-base-100 px-8 mb-4 h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {navIteam}
                    </ul>
                </div>
                <Link to='/' className=" text-xl">
                    <img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navIteam}
                </ul>
            </div>
            <div className="navbar-end text-2xl">
                <AiOutlineShopping/>
                <span className='mx-4'><FcSearch/></span>
             <Link to='/appoinment'><button className="btn btn-outline btn-secondary">
                Appoinment</button></Link>
            </div>
        </div>
    );
};

export default NavBar;