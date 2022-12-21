import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from "./sections/Navbar";
import Home from "./Home";
import AboutUs from "./About";
import SignUp from "./SignUp";
import Footer from "./sections/Footer";

import { useState, useEffect } from 'react';

const Main = () => {

    const [loading,setLoading] = useState(true);
    const [appData,setData] = useState({});
    
    useEffect(() => {
        fetch('http://localhost:3000/dummy-apis/website-data.json').then(results => results.json()).then( response => {
            setData(response)
            setLoading(false)
        });
    },[loading]);

    if(!loading){
        return(
            <>
                <Navbar data={appData}/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home data={appData}/>}/>
                        <Route path="/about" element={<AboutUs data={appData}/>}/>
                        <Route path="/sign-up" element={<SignUp data={appData}/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer data={appData.links}/>
            </>
        );
    } else {
        return(
            <h1>Loading...!</h1>
        );
    }
    
}

export default Main;