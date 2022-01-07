import React from 'react';
import { Link } from 'react-router-dom';
import mag from '../imgs/icon-magnet.gif';
import tub from '../imgs/icon-youtube.jpg';

export default function Resources() {
    return (
        <>

        <Link to="/">Back</Link>
        <h1>Resources</h1>
        {/*<img src={mag} className="mag" alt="magnet link"/> 
        <a href="magnet:?xt=urn:btih:29836D8AC9511C7D4237AF2C4A2E87F0E740BD9D&dn=TI-84+Plus+Silver+Edition+%28OS+version+2.55MP%29+ROM&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce">
            TI 84 Calculator ROM</a>*/}
        
        <br />
        <img src={mag} className="mag" alt="magnet link"/> 
        <a href="magnet:?xt=urn:btih:12d12d35a45e2142b6a698c1b9a8447768e712d5&dn=SpindlerAcademyExampleVideo.mkv&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.openbittorrent.com:6969">
            Example Spindler Academy video</a> 
        <br />
        <img src={mag} className="mag" alt="magnet link"/>
        <a href="magnet:?xt=urn:btih:964b8e675e118920dc92c148ee2a9526d9dba32e&dn=HowToTorrentFinal.mpeg&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://exodus.desync.com:6969/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://code2chicken.nl:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://open.xxtor.com:3074/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://open.stealth.si:80/announce&tr=http://buny.uk:6969/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=https://tr.torland.ga:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=https://t.btcland.xyz:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://trackme.theom.nz:443/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tracker.nanoha.org:443/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://tracker.lilithraws.cf:443/announce">
            How To Torrent 
        </a>
        <br />
        <img src={tub} className="tub" alt="youtube link"/>
        <a href="https://www.youtube.com/playlist?list=PL-SStBoAJuw0vj8MgTFhY5y9wSFnjGbOB">
            Introduction to Cryptography (UCSD)
        </a>
        <br />
        <img src={tub} className="tub" alt="youtube link"/>
        <a href="https://www.youtube.com/playlist?list=PLxQSlOe-wlgAG_A_6ES9hpD_2-gm1D-UY">
            Machine Learning (UCSD)
        </a>

        </>
    )
}