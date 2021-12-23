import React from 'react';
import logo from '../../src/logo.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="App">
      <header className="App-header">

        <ul>
          <li>
            About
          </li>
          <li>
          <Link to="/blog">Blog</Link>
          </li>
          <li>
            {/* Need to figure out routes*/}
            <Link to="/resources">Resources</Link>
          </li>
          <li>
          <a href="#donate">Donate</a>
          </li>
          <li>
          <a href="#links">Links</a>
          </li>
          
        </ul>
        <img src={logo} className="logo" alt="Spindler Academy logo"/>
        <p>
          Welcome to Spindler Academy! <br /> Free Math and Computer Science Educational Videos for Everyone. 
        </p>
        <br />
        <div id="donate">
        
        <p>If you would like to support me, my DOGE address is:</p><br />
        <p>DFQhAMEZUKZUkuRyJ4Nz19EESDkVHi4uqx</p>

        </div>
        <div id="links" >
            <p>For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life. - John 3:16</p>
          <ul>
            <li>
              <a href="http://www.twitter.com/avatar_polyglot">Twitter</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCbcm1mHHID3JNDLMmASIRMA">Spindler Academy Youtube Channel</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCQ0qEM_rTl5Lmo-BCdF6J7Q">Avatar Polyglot Youtube Channel</a>
            </li>
            <li>
              <a href="http://www.vk.com/avatar_polyglot">Vk</a>
            </li>
            <li>
              <a href="http://www.github.com/aspindle">Github</a>
            </li>
            <li>
              <a href="http://www.instagram.com/alex_spindier">Instagram</a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/alex-spindler">Linkedin</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
    )
}