import React, { Component } from 'react'
import instagram from '../images/instagram.png'
import discord from '../images/discord.jpg'
import twitch from '../images/twitch.png'
import facebook from '../images/facebook.png'

import '../css/home.css';
import ReactPlayer from "react-player"

//import ReactPlayer from "react-player"


export default class middleSection extends Component {
    render() {
        return (
          <>
    <div id="home" style={{height: 900}}>

          
        {/* <aside class="sidebar">
          <img src={valorantjpg} alt="overwatchDscord"></img>
        </aside> */}
      </div>

        <div id="about" style={{height: 500}}style={{textAlign: 'center'}}>
        <h1>About</h1>
        
        <p>Blugold Esports is a casual and competitive club sport. The games we have included in our club are League of Legends, Rocket League, Overwatch, Super Smash Bros, Fortnite, Apex, Call of Duty, Rainbow 6, Valorant, and Counter Strike Global Offensive. We host multiple events through out the year and if you are interested in this please join our discord.</p>
        <div classname = "ytvideo"style={{alignContent: 'center'}}>
              <ReactPlayer
              url="https://www.youtube.com/watch?v=wthR1kdttAY&t=1s"/>
        </div>
        </div>
        <div id="contact" style={{height: 500}} style={{textAlign: 'center'}}>

        <h1>Contact Information</h1>
       
        <h2>Contact Name</h2> 
        <h4>Mikinley Prafke</h4>


        <h2>Contact Email</h2> 
        <h4>prafkemb3805@uwec.edu</h4>



        <h2>Advisor Name</h2> 
        <h4>Chip Eckardt</h4>

        <h2>Co-Advisor Name: </h2> 
        <h4>Tom Pemberton</h4>

        <h2>Co-Advisor E-mail:</h2> 
        <h4>pembertj@uwec.edu</h4>

        <br></br>



        


          
        </div>

        <div id="service" style={{height: 500}}style={{textAlign: 'center'}}>
        <h1>Social Media</h1>
        <a href="https://www.instagram.com/blugold_esports/" target="_blank">
         <img alt="instagram" src={instagram}
         width="100px" height="100"></img>
        </a>

        <a href="https://discord.com/invite/9ZXRzxW" target="_blank">
         <img alt="discord" src={discord}
         width="100px" height="100"></img>
        </a>

        <a href="https://www.twitch.tv/blugold_esports" target="_blank">
         <img alt="twitch" src={twitch}
         width="100px" height="100"></img>
        </a>

        <a href="https://www.facebook.com/groups/765181836995709/" target="_blank">
         <img alt="facebook" src={facebook}
         width="100px" height="100"></img>
        </a>
        {/* uncomment for discord picture */}
        {/* <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.polygon.com%2F2020%2F3%2F16%2F21182519%2Fdiscord-down-outage-march-2020&psig=AOvVaw3ccNGCZy5jtyrMwqS42S5i&ust=1635577195796000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMi30ICG7_MCFQAAAAAdAAAAABAU" alt = "discordimg"></img> */}

        </div>
        

        
            </>
        )
    }
}
