import React, { Component } from 'react';
import '../App.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import RotatedMarker from 'react-leaflet-rotatedmarker'
var mqtt = require('mqtt');

var topic = 'eyezon/livegps'
var client = mqtt.connect(`ws://iot.eclipse.org:80/ws`)
client.on('connect', function () {
console.log("MQTT Connected!")
})

client.on('error', (error) => {
  console.log(error)
})

client.subscribe(topic)

const iconCar = new L.Icon({
  iconUrl: require('../car-marker-2.png'),
  iconRetinaUrl: require('../car-marker-2.png'),
  iconAnchor: [22,29],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 40),
});

class MapView extends Component {
  constructor() {
    super()
    this.state = {
      lat: 22.5726,
      lng: 88.3639,
      markerlat: 22.5803,
      markerlng: 88.4378,
      zoom: 13,
      angle: 0 
    }
    client.on('message',(topic, message) =>{
      // message is Buffer
      var string = message.toString()
      var obj = JSON.parse(string)
      console.log(obj)
      this.setState({markerlat: obj.lati , markerlng: obj.longi, angle: obj.angle})
    })
  }

  // var lat = this.state.markerlat+ ((Math.random() - 0.5) * (this.state.markerlat / 2))

  render() {
    // console.log("++++++++++", result)
    const position = [this.state.lat, this.state.lng];
    const markerPosition = [this.state.markerlat, this.state.markerlng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <RotatedMarker position={markerPosition} icon ={iconCar} rotationAngle={this.state.angle} rotationOrigin={'center'} />
        {/* <Marker position={markerPosition} icon ={iconCar} rotation={this.state.angle}>
          <Popup>
            <span>Gps fuzzer examples</span>
          </Popup>
        </Marker> */}
      </Map>
    );
  }
}

export default MapView;
