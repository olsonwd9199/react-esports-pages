
import React, { Component } from 'react'
import '../css/game.css';
import discord from '../images/rocketDis.png'
import rocket from '../images/rocket.jpg'


class Rocket extends Component {

    render() {
        return (
        
            
            <div className = "body">
               
                <header class="header">
                   
                    
                <div  class = "animated fadeInRight">
                    <h1><b>Rocket Leauge</b></h1>
                    
                    </div>
                </header>

			<navigation class="navigation">

                <h1>Join the Rocket Leauge server!</h1>
                <img src={discord} alt="rocketDis" width="230px" height= "230"></img>
            
            </navigation>


			<main class="main">
            <h1><u>Blugold Rocket Leauge</u></h1>
                <p>Blugold Rocket Leauge offers a variety of compedative and casual rocket leauge opportunitiies
                <br></br>
                <br></br>
                Join the compedative Rocket Leauge team to participate in exciting games and tournaments where you can put your driving and soccer skills to the test.
                <br></br>
                <br></br>
                Looking for something a little more relaxed? The club hosts monthly events for player of all skill ranges to play and earn prizes.
                </p>
            </main>
			<aside class="sidebar">
                <img src={rocket} alt="rocket" width="325px" height= "400px"></img>
            </aside>

			<footer class="footer">
            <h1><a href="https://discord.com/invite/9ZXRzxW" target="_blank">Join Now</a></h1>    
            
                
                
            </footer>
            </div>
               
      
                

            

            

  
        )
        
    }

}

export default Rocket