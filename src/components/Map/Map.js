import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import {useRef} from "react";


const MapWithAMarker = withScriptjs(withGoogleMap(props => {
    // return <GoogleMap
    //
    //     defaultZoom={15}
    //     center={props.center}
    //     onBoundsChanged={props.onBoundsChanged}
    // >
    //     {
    //         props.places?.map((place) => {
    //             return <Marker
    //                 position={{lat: Number(place.latitude),
    //                     lng: Number(place.longitude)}}
    //             />
    //         })
    //     }
    // </GoogleMap>
    return <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={8}
        defaultCenter={props.coordinate}
        onBoundsChanged={props.onBoundsChanged}
    >
        {
            props.places?.map((place) => {
                return <Marker
                position={{lat: Number(place.latitude),
                    lng: Number(place.longitude)}}
                />
            })
        }
    </GoogleMap>
}));

const Map = ({ setBound, coordinate, setCoordinate, places }) => {
    const refs = {}
    const onMapMounted =  ref => {
        refs.map = ref;
    }
    const onBoundsChanged = (e) => {
        console.log(refs.map.getBounds())
        console.log(refs.map.getCenter())

    }
    return(
        <MapWithAMarker
            googleMapURL={process.env.GOOGLE_MAP_URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            setBound={setBound}
            coordinate={coordinate}
            setCoordinate={setCoordinate}
            places={places}
            onBoundsChanged={onBoundsChanged}
            onMapMounted={onMapMounted}
        />
    )
}

export default Map