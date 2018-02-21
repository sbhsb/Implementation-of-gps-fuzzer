import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import GoogleMapReact from 'google-map-react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import { divIcon } from 'leaflet';
import Home from './components/Home';
import Map from './components/Map'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lat: 22.5726,
      lng: 88.3639,
      markerlat: 22.5803,
      markerlng: 88.4378,
      zoom: 13 
    }
  }
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Map">Map</Link></li>
          {/* <li><Link to="/topics">Topics</Link></li> */}
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/Map" component={Map}/>
        {/* <Route path="/topics" component={Topics}/> */}
      </div>
    </Router>
    );
  }
}

export default App;
