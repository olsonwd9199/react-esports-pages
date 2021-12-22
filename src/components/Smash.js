
import React, { Component } from 'react'
import '../css/game.css';
import discord from '../images/smashDis.png'
import smash from '../images/smash.jpg'


class Smash extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                    
                    
                <div  class = "animated fadeInRight">
                    <h1><b>Super Smash Brothers</b></h1>
                    
                    </div>
                </header>

			<navigation class="navigation">

                <h1>Join the Smash server!</h1>
                <img src={discord} alt="rocketDis" width="230px" height= "230"></img>
            
            </navigation>


			<main class="main">
            <h1><u>Blugold Smash</u></h1>
                <p>Blugold Smash offers a variety of casual and compedative in person play for people of all skill ranges. Weekly tournaments every friday hosted in Davies.
                <br></br>
                <br></br>
                Join the compedative Smash team to travel with friends to local tournaments.
                <br></br>
                <br></br>
                Looking for something a little more relaxed? The club hosts monthly events for player of all skill ranges to play and earn prizes.
                </p>
            </main>
			<aside class="sidebar">
                <img src={smash} alt="smash" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Smash