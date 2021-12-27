import React from 'react'
import './home.css'
import Background from "./Background.jpg";

function Home() {
    return (
        
        <div style={{ 
            backgroundImage: `url(${Background})`,
             width: '1519px' ,
             height: '500px'
              }}>

        
        <h1 className= "home"></h1>
        
      </div>
    )
}

export default Home
