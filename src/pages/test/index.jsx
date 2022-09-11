import { GoogleComponent } from 'react-google-location' 
import React, { Component } from 'react';
 
 
 
const API_KEY = 'AIzaSyA6lXWAGrCTGzGKdaIT_XwTrUms3TpoRsE';  // how to get key - step are below
 
class MapSample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    console.log("location",this.state.place);
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          // country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default MapSample;