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
        </p>
        <br />
        <div id="donate">
        
        <p>If you would like to support me, my DOGE address is:</p><br />
        <p>DFQhAMEZUKZUkuRyJ4Nz19EESDkVHi4uqx</p>

        </div>
        <Footer/>
      
    </div>
    )
}