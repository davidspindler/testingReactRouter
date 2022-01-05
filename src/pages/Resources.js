import React from 'react';
import { Link } from 'react-router-dom';
import mag from '../imgs/icon-magnet.gif';

export default function Resources() {
    return (
        <>

        <Link to="/">Back</Link>
        <h1>Resources</h1>

        <img src={mag} className="mag" alt="magnet link"/> 
        <a href="magnet:?xt=urn:btih:29836D8AC9511C7D4237AF2C4A2E87F0E740BD9D&dn=TI-84+Plus+Silver+Edition+%28OS+version+2.55MP%29+ROM&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce">
            TI 84 Calculator ROM</a>
        <br />
        <img src={mag} className="mag" alt="magnet link"/> 
        <a href="magnet:?xt=urn:btih:12d12d35a45e2142b6a698c1b9a8447768e712d5&dn=SpindlerAcademyExampleVideo.mkv&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.openbittorrent.com:6969">
            Example Spindler Academy video</a> 
        
        </>
    )
}