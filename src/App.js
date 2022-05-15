import React from "react";
import './app.css'
import Info from './components/info';
import About from './components/about';
import Footer from "./components/footer";

function app(){
    return(
        <div className="App">
       <Info/>
       <About/>
       <Footer/>
        </div>
    )
}

export default app;