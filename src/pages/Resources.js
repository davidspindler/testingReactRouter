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
        <a href="magnet:?xt=urn:btih:12d12d35a45e2142b6a698c1b9a8447768e712d5&dn=SpindlerAcademyExampleVideo.mkv&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.openbittorrent.com:6969">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=_j-sUfeqNUU">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
           Example Spindler Academy video 
        <br />
        
        {/*------------ */}
        <a href="magnet:?xt=urn:btih:964b8e675e118920dc92c148ee2a9526d9dba32e&dn=HowToTorrentFinal.mpeg&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://exodus.desync.com:6969/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://code2chicken.nl:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://open.xxtor.com:3074/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://open.stealth.si:80/announce&tr=http://buny.uk:6969/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=https://tr.torland.ga:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=https://t.btcland.xyz:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://trackme.theom.nz:443/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tracker.nanoha.org:443/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://tracker.lilithraws.cf:443/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=XCMPke6Wrgc">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            How To Torrent 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:5f62788fa5d2022a856c49f8d0f212471089b8bf&dn=What%20is%20a%20Username%20and%20Password.mpeg&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://open.xxtor.com:3074/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=https://trackme.theom.nz:443/announce&tr=http://tracker.bt4g.com:2095/announce&tr=https://tracker.nanoha.org:443/announce&tr=udp://open.stealth.si:80/announce&tr=https://tracker.iriseden.fr:443/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://www.torrent.eu.org:451/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker.openbittorrent.com:6969&tr=http://buny.uk:6969/announce&tr=udp://exodus.desync.com:6969/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=https://tr.fuckbitcoin.xyz:443/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=87Qra_AEkYs">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            What is a Username and Password? 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:530b57125d54fccaf21e800a79d7d76282d0744e&dn=intro_to_www.mp4&tr=udp://tracker.theoks.net:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=http://buny.uk:6969/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://www.torrent.eu.org:451/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://tracker.nanoha.org:443/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://tracker.openbittorrent.com:6969&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://open.xxtor.com:3074/announce&tr=https://trackme.theom.nz:443/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=udp://tracker.opentrackr.org:1337/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://youtu.be/jABU9Iu3AXA">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Introduction to the Internet 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:85930a065a68cfc44932ea815c45dfde6182569d&dn=The_Solar_System.mkv&tr=udp://open.xxtor.com:3074/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=https://trackme.theom.nz:443/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://tracker.dix.tf:6969/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=http://buny.uk:6969/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tracker.iriseden.fr:443/announce&tr=https://tr.torland.ga:443/announce&tr=https://tracker.nanoha.org:443/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=udp://open.stealth.si:80/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tr.doogh.club:443/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=https://t1.tokhmi.xyz:443/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=M1SoyKBR5lA">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            The Solar System 
        <br />


         {/*------------ */}
         <br />
        <a href="magnet:?xt=urn:btih:0c5410f92a5090ce68dcc65545d0135468a9fd65&dn=Modern%20Cryptography&tr=http://buny.uk:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://www.torrent.eu.org:451/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=https://tracker.nanoha.org:443/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://trackme.theom.nz:443/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://code2chicken.nl:6969/announce&tr=http://tracker.bt4g.com:2095/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=https://tracker.iriseden.fr:443/announce&tr=udp://open.stealth.si:80/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=udp://open.xxtor.com:3074/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://retracker.hotplug.ru:2710/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/playlist?list=PL-SStBoAJuw0vj8MgTFhY5y9wSFnjGbOB">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Introduction to Cryptography (UCSD)
        <br />

         {/*------------ */}

         <a href="magnet:?xt=urn:btih:4955dead511f0427c1340022a1709ec31fbe0f80&dn=Web%20Security&tr=http://tracker.ipv6tracker.ru:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.dix.tf:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tracker.nanoha.org:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=http://buny.uk:6969/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://open.stealth.si:80/announce&tr=https://trackme.theom.nz:443/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker.moeking.me:6969/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tr.doogh.club:443/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=https://t.btcland.xyz:443/announce&tr=udp://open.xxtor.com:3074/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker.moeking.eu.org:6969/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/playlist?list=PL1y1iaEtjSYiiSGVlL1cHsXN_kvJOOhu-">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Web Security (Stanford)
        <br />

         {/*------------ */}

        <a href="magnet:?xt=urn:btih:a1165ef4677f73048e00483908d7f7b7d9268c45&dn=Machine%20Learning%20Fundamentals&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=https://tracker.kuroy.me:443/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=http://buny.uk:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=udp://tracker.dix.tf:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=https://trackme.theom.nz:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tracker.nanoha.org:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://open.xxtor.com:3074/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://tr.doogh.club:443/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tr.torland.ga:443/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/playlist?list=PLxQSlOe-wlgAG_A_6ES9hpD_2-gm1D-UY">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Machine Learning (UCSD)
        <br />

         {/*------------ */}
        
        
       {/*<img src={tub} className="tub" alt="youtube link"/>
        <a href="https://www.youtube.com/watch?v=6F0pR-ANmXY&list=PLchkeZ4DkEwcUwOmNZiVh4nfxGaEcQ6Im">
            Computer Graphics (UCSD)
        </a>*/}
        </>
    )
}