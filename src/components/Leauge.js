
import React, { Component } from 'react'
import '../css/game.css';
import discord from '../images/leaugeDis.png'
import leaugeImg from '../images/leauge.jfif'


class Leauge extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                  
                    
                <div  class = "animated fadeInRight">
                    <h1><b>Leauge of Legends</b></h1>
                    
                    </div>
                </header>

			<navigation class="navigation">

                <h1>Join the Leauge server!</h1>
                <img src={discord} alt="overwatchDscord" width="230px" height= "230"></img>
            
            </navigation>


			<main class="main">
            <h1><u>Blugold Leauge of Legends</u></h1>
                <p>Blugold Leauge of Legends offers a variety of compedative and casual MOBA events.
                <br></br>
                <br></br>
                Join the compedative Leauge team to participate in the historical UWEC Leauge team and see where this whole club started from.
                <br></br>
                <br></br>
                Looking for something a little more relaxed? The club hosts monthly events for player of all skill ranges to play and earn prizes.
                </p>
            </main>
			<aside class="sidebar">
                <img src={leaugeImg} alt="leauge" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Leauge