import React from 'react';
import p9 from './p9.jpg';
import p7 from './p7.jpg';
import p8 from './p8.jpg';
import p10 from './p10.jpg';
import p1 from './p1.png';



const Content = () =>{
    return(
        <nav className="Content-holder">
                <ul>
                    <li><img src={p1} alt="Ban2"></img>&nbsp;&nbsp;&nbsp;<u><a href="https://google.com" target="_blank">Treatment</a></u></li>
                    &nbsp;
                    
                    &nbsp;
                    <li><img src={p8} alt="Ban2"></img>&nbsp;&nbsp;&nbsp;<u><a href="https://google.com" target="_blank">Places</a></u></li>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    
                    <li><img src={p9} alt="Ban2"></img>&nbsp;&nbsp;&nbsp;<u><a href="https://google.com" target="_blank">Packages</a></u></li>
                    &nbsp;
                    
                    <li><img src={p10} alt="Ban2"></img>&nbsp;&nbsp;&nbsp;<u><a href="https://google.com" target="_blank">Details</a></u></li>
                    &nbsp;
                    &nbsp;
                
                   

                </ul>
            </nav>
    )
}

export default Content;