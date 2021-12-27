import React from 'react'
import Socialbutton from '../Socialbutton'
import "./footer.css"
const Footer = () => {
    return (
<div className="main-footer">
    <div className="container">

         {/* Column1 */}   
         <div className="col">
             <ul className="list-unstyled">
            <li>Ghent university  </li>
            <li>Master of Science in Engineering: Architecture </li>
            <li>(Architectural Design and Construction Techniques)</li>
             </ul>
             <Socialbutton/>
         </div>
         {/* Column2 */}
        
        
         

        </div>
        <div> 
        <p className='col-sm'>
            <hr/>
            &copy;{new Date().getFullYear()} <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' color='white'> RubenLeroy | all rights Reserved | Terms Of Service | Privacy</a>
        </p>
        </div>
   
</div>
    )    
}

export default Footer