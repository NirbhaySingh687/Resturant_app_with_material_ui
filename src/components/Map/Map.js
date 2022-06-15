import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props => {
    console.log(`########MapWithAMarker####`,props)
    return <GoogleMap
        defaultZoom={8}
        defaultCenter={props.coordinate[0]} >
        {
            props.coordinate?.map((pos)=>(
                <Marker
                    position={pos}
                />
            ))
        }
    </GoogleMap>
}));

const Map = ({ setBound, coordinate, setCoordinate }) => {
    console.log(`Process`,process.env)
    return(
        <MapWithAMarker
            googleMapURL={process.env.GOOGLE_MAP_URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            setBound={setBound}
            coordinate={coordinate}
            setCoordinate={setCoordinate}
        />
    )
}

export default Map