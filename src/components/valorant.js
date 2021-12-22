
import React, { Component } from 'react'
import '../css/game.css';
import discord from '../images/valDis.png'
import valorant from '../images/valorant.jpg'


class Valorant extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                    
                    
                <div  class = "animated fadeInRight">
                    <h1><b>Valorant</b></h1>
                    
                    </div>
                </header>

			<navigation class="navigation">

                <h1>Join the Valorant server!</h1>
                <img src={discord} alt="overwatchDscord" width="230px" height= "230"></img>
            
            </navigation>


			<main class="main">
            <h1><u>Blugold Valorant</u></h1>
                <p>Blugold Valorant offers a variety of compedative and casual tactical shooting events.
                <br></br>
                <br></br>
                Join the compedative Valorant team to participate in exciting games and tournaments where you can put your skill to the test.
                <br></br>
                <br></br>
                Looking for something a little more relaxed? The club hosts monthly events for player of all skill ranges to play and earn prizes.
                </p>
            </main>
			<aside class="sidebar">
                <img src={valorant} alt="valorant" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Valorant