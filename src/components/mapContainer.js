import React from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

const mapStyle = { width: "60%", height: "70%" }

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyle}
        initialCenter={{
          lat: 41.415858,
          lng: -81.650059
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Kenyatta International Convention Centre"}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ' AIzaSyBwUESKBGXex7zh6SSP0Cohdr8Fv3wroGo'
})(MapContainer)
