import React from 'react';


const Navbar1 = () =>{
    return(
        <nav className="mainmenu">
                <ul>
                    <li><a href="#">Home</a>
                    <ul class="drop">
                                <li><a href="#">Home one</a></li>
                                <li><a href="#">Home Two</a></li>
                                <li><a href="#">Home Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a>
                    <ul class="drop">
                                <li><a href="#">Aboyt one</a></li>
                                <li><a href="#">Aboyt Two</a></li>
                                <li><a href="#">Aboyt Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Services</a>
                        <ul class="drop">
                                <li><a href="#">Service one</a></li>
                                <li><a href="#">Service Two</a></li>
                                <li><a href="#">Service Three</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="#">Places</a>
                    <ul class="drop">
                                <li><a href="#">Place one</a></li>
                                <li><a href="#">Place Two</a></li>
                                <li><a href="#">Place Three</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contacts</a>
                    <ul class="drop">
                                <li><a href="#">Contact one</a></li>
                                <li><a href="#">Contact Two</a></li>
                                <li><a href="#">Contact Three</a></li>
                        </ul>
                    </li>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <li>
                    <input type="search" name="search" placeholder="search site"></input>
                    <input type="submit" value="Go"></input>
                    </li>

                </ul>
            </nav>
    )
}

export default Navbar1;