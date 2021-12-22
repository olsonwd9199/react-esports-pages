import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default class header extends Component {
    render() {
        return (
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
          <li><Link  to="service" spy={true} smooth={true}>Social Media</Link></li>
          
            </ul>
        )
    }
}