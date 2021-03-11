import React from 'react';
import p11 from './p11.jpg';


const Bottom = () =>{
    return(
        <nav className="Task-bar">
                <ul>
                    <li><img src={p11} alt="Ban2"></img>&nbsp;&nbsp;&nbsp;<u><a href="https://google.com" target="_blank">Healthy&nbsp;Future</a></u></li>
                    <li><div>
                        <ol type="Null">
                            <li><u><b>What Is Medical Tourism? </b></u><br/>
                            <p className="para">It is a term used to describe the rapidly-growing practice of traveling across international borders to obtain health care. Patients going to a different country for either urgent or elective medical procedures. Such services typically include elective procedures as well as complex specialized surgeries such as joint replacement (knee/hip), cardiac surgery, dental surgery, and cosmetic surgeries. However, every type of health care, including psychiatry, alternative treatments, convalescent care and even burial services are available.</p></li>
                            
                            <li><u><b>Why Medical Tourism In Greece?</b></u> <br/>
                                <p className="para">Greece can be regarded as the very first medical tourism destination. Greece has come a long way since the ancient times and its medical infrastructure has managed to successfully keep pace with current advancements within the medical industry.
                                Excellent Medical Tourism Facilities - High Standards of Healthcare - Highly Qualified Medical Professionals - Diverse Recovery and Recreation Opportunities - Easy Entry Procedures - Welcoming Culture - Excellent Medical Tourism Facilities</p> </li>
                            
                            
                            </ol>
                         
                        
                        </div>
                        </li>
                    <li><p><a href="https://google.com" target="_blank">CLICK</a><input type="submit" value="Next Page"></input></p></li>
                    
                    

                </ul>
            </nav>
    )
}
export default Bottom;