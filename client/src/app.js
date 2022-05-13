import React from "react";
import './app.css';
import {
    Routes,
    Route
  } from "react-router-dom";
import Home from './components/home/home';
import Urllists from './components/urlists/urllists';
import Header from './components/header/header';
import Footer from './components/footer/footer';
export const App = () => {
    return(
    <>
    
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/urllist' element={<Urllists />} />
        </Routes>
        <Footer />
    </>
       
        // {/* <navbar>
        //     // <two option home and url list>
        // </navbar> */}

        // {/* home - search input 
        //     shorturl input
        //     shorten butten */}

        // {/* footer- basic info     */}


        // {/* <search url  with button></search> */}
        //     {/* tabble */}
        //     {/* export to excel */}
    )
}
export default App;