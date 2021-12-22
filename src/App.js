import React, { Component } from 'react'
import Header from './components/header'
import MiddleSection from './components/middleSection'
import ReactPlayer from "react-player"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Valorant from './components/valorant';
import Overwatch from './components/Overwatch';
import Rocket from './components/Rocket';
import Leauge from './components/Leauge';
import Smash from './components/Smash';
import Apex from './components/Apex';
import Csgo from './components/Csgo';
import Lab from './components/Lab';
import Contact from './components/Contact';
import ContactList from './components/ContactList';
import Feedback from './components/Feedback';
import Intrest from './components/Intrest';
export default class App extends Component {
  render() {
    return (
    <>
<Router>
	<Navbar />
    <Switch>
		  <Route path='/val' component={Valorant} />
	  </Switch>
    <Switch>
		  <Route path='/ove' component={Overwatch} />
	  </Switch>
    <Switch>
		  <Route path='/rocket' component={Rocket} />
	  </Switch>
    <Switch>
		  <Route path='/leauge' component={Leauge} />
	  </Switch>
    <Switch>
		  <Route path='/smash' component={Smash} />
	  </Switch>
    <Switch>
		  <Route path='/apex' component={Apex} />
	  </Switch>
    <Switch>
		  <Route path='/csgo' component={Csgo} />
	  </Switch>
    <Switch>
		  <Route path='/lab' component={Lab} />
	  </Switch>
    <Switch>
		  <Route path='/Contact' component={Contact} />
	  </Switch>
    <Switch>
		  <Route path='/Contacts' component={ContactList} />
	  </Switch>
	<Switch>
		  <Route path='/feedback' component={Feedback} />
	  </Switch>
	<Switch>
		  <Route path='/intrest' component={Intrest} />
	  </Switch>
</Router>
      
      <Header/>
      <MiddleSection/>
      <ReactPlayer/>
    </>
    )
  }
}