
import React, { Component } from 'react'
import '../css/game.css';
import discord from '../images/apexDis.png'
import apex from '../images/apex.jpg'


class Apex extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                    
                    
                <div  class = "animated fadeInRight">
                    <h1><b>Apex Legends</b></h1>
                    
                    </div>
                </header>

			<navigation class="navigation">

                <h1>Join the Apex server!</h1>
                <img src={discord} alt="rocketDis" width="230px" height= "230"></img>
            
            </navigation>


			<main class="main">
            <h1><u>Blugold Apex</u></h1>
                <p>Blugold Apex offers a variety of casual and compedative events for people of all skill levels.
                <br></br>
                <br></br>
                Join the compedative Apex team compeate with your squad in order to battle to the top.
                <br></br>
                <br></br>
                Looking for something a little more relaxed? The club hosts monthly events for player of all skill ranges to play and earn prizes.
                </p>
            </main>
			<aside class="sidebar">
                <img src={apex} alt="apex" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Apex