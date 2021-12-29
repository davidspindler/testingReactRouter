import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="App">
        <header className="App-header">
        <Navbar/>
        </header>
        <p>
          Welcome to Spindler Academy! <br /> Free Math and Computer Science Educational Videos for Everyone. 
          <br />
          <h2>This website is still a work in progress...</h2>
        </p>
        <br />
        
        <Footer/>
      
    </div>
    )
}