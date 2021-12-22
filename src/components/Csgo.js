
import React, { Component } from 'react'
import '../css/game.css';
import discord from '../images/csgoDis.png'
import csgo from '../images/csgo.jfif'


class Csgo extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                    
                    
                <div  class = "animated fadeInRight">
                    <h1><b>CSGO</b></h1>
                    
                    </div>

                </header>

			<navigation class="navigation">

                <h1>Join the CSGO server!</h1>
                <img src={discord} alt="overwatchDscord" width="230px" height= "230"></img>
            
            </navigation>


			<main class="main">
            <h1><u>Blugold CSGO</u></h1>
                <p>Blugold CSGO offers a variety of compedative and casual tactical shooting events.
                <br></br>
                <br></br>
                CSGO doesn't currently have a compedative team but look out for announcements about a debuet team.
                <br></br>
                <br></br>
                Looking for something a little more relaxed? The club hosts monthly events for player of all skill ranges to play and earn prizes.
                </p>
            </main>
			<aside class="sidebar">
                <img src={csgo} alt="csgo" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Csgo