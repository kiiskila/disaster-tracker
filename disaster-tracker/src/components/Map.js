import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import VolcanoMarker from './VolcanoMarker'
import FireMarker from './FireMarker'
import IcebergMarker from './IcebergMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    // pull the needed data from the json obj
    const markers = eventData.map(ev => {

        // if its a wildfire(id 8), create a wildfire marker at the coords
        if(ev.categories[0].id === 8) {
            return <FireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }

        // Volcanoes can have multiple coords, only get the single coord volcanoes
        // if its a volcano(id 12), create a volcano marker at the coords
        if(ev.categories[0].id === 12 && !isNaN(ev.geometries[0].coordinates[0])) {
            return <VolcanoMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }

        // icebergs can have multiple coords, only get the single coord iceberg
        // if its a iceberg(id 15), create a iceberg marker at the coords
        if(ev.categories[0].id === 15 && !isNaN(ev.geometries[0].coordinates[0])) {
            return <IcebergMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }

        return null
    })

    // display the map with the markers
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'XXXXXXXXXXXXXXXXXXXX' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

// Default map location (center of North America)
Map.defaultProps = {
    center: {
        lat: 48.81,
        lng: -101.77
    },
    zoom: 4
}

export default Map
