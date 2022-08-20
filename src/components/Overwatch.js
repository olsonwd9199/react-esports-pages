
import React, { Component } from 'react'
import '../css/game.css';
import discord from '../images/overwatchDscord.png'
import overwatch from '../images/overwatch.jfif'


class Overwatch extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                    
                    <div  class = "animated fadeInRight">
                    <h1><b>Overwatch</b></h1>
                    
                    </div>
                    
                </header>

			<navigation class="navigation">

                <h1>Join the Overwatch server!</h1>
                <img src={discord} alt="overwatchDscord" width="230px" height= "230"></img>
            
            </navigation>


			<main class="main">
                <h1><u>Blugold Overwatch</u></h1>
                <p>Blugold Overwatch offers a variety of casual and compedative events for people of all skill levels.
                <br></br>
                <br></br>
                Join the compedative overwatch team to recieve dedicated coaching and gain experience in a fast pased team enviroment.
                <br></br>
                <br></br>
                Looking for something a little more relaxed? The club hosts monthly events for player of all skill levels  to play games and earn prizes.
                </p>
            </main>
			<aside class="sidebar">
                <img src={overwatch} alt="overwatchDscord" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Overwatch
