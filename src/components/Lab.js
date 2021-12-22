
import React, { Component } from 'react'
import '../css/game.css';
import uwec from '../images/uwec.jpg'
import labHours from '../images/labHours.png'


class Lab extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                    
                    
                <div  class = "animated fadeInRight">
                    <h1><b>Esports Lab</b></h1>
                    
                    </div>
                </header>

			<navigation class="navigation">

            <h1>Check the lab hours</h1>
                <img src={labHours} alt="labHours" width="230px" height= "230"></img>
                
            
            </navigation>


			<main class="main">
            <h1><u>Blugold Esports Lab</u></h1>
                <p>Blugold Esports offers an esports lab with ten high end pc's for both compedative and casual use.
                <br></br>
                <br></br>
                Come in any time during opperating hours to play any of our club games.
                <br></br>
                <br></br>
                The Esports lab is located in the hilltop recreation area on upper campus.
                </p>
            </main>
			<aside class="sidebar">
                <img src={uwec} alt="uwec" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Lab