import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faQuora,
    faFacebook,
    faInstagram,
    faLinkedin, 
} from "@fortawesome/free-brands-svg-icons";



export default function Socialbutton () {
return (
    
 <div className="flex flex-col items-center min-h-screen py-2">



<a href="https://www.instagram.com/ruben.leroy/">
    <i class="faInstagram">
    <FontAwesomeIcon icon={faInstagram} size='2x'color='white'> </FontAwesomeIcon>
    </i>

</a>

<a href="https://www.facebook.com/ruben.leroy.3/">
    <i class="faFacebook">
    <FontAwesomeIcon icon={faFacebook} size='2x' color='white'> </FontAwesomeIcon>
    </i>

</a>

<a href="https://www.linkedin.com/in/ruben-leroy-b837a6205/">
    <i class="faLinkedin">
    <FontAwesomeIcon icon={faLinkedin} size='2x' color='white'> </FontAwesomeIcon>
    </i>

</a>

<a href="https://www.quora.com/profile/Ruben-Leroy">
    <i class="faQuora">
    <FontAwesomeIcon  icon={faQuora} size='2x'  color='white' > </FontAwesomeIcon>
    </i>

</a>


 </div>
);
}
