import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Share/Footer/Footer';
import NavBar from '../Home/Share/NavBar/NavBar';

const Main = () => {
    return (
         <>  
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Main;