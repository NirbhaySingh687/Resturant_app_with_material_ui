import React, {useEffect, useState} from "react";
import { Grid, Box } from "@mui/material"
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./Api";

function Resturant(){
    const [ places, setPlaces ] = useState([])
    const [ coordinate, setCoordinate] = useState({lat: 25.4733783, lng: 80.3324406})
    const [ bound, setBound] = useState(null)
    const onBoundChange = ()=>{
        // const refs = {}
        // setBound({
        //     bounds: refs.map.getBounds(),
        //     center: refs.map.getCenter(),
        // })
        // console.log(`####bound###`,bound)

    }
    useEffect(()=>{

        navigator.geolocation.getCurrentPosition(({ coords})=> {
            const { latitude, longitude } = coords
            setCoordinate({ lat: latitude, lng: longitude})
        })
        getPlacesData().then((data) => {
            setPlaces(data)
        })
    }, [ coordinate])
    return(
        <Box>
            <Header />
            <Grid container spacing={3} style={{  padding: "10px", }}>
                <Grid item xs={12} md={4}><List places={places}/></Grid>
                <Grid item xs={12} md={8}><Map setCoordinate={setCoordinate} setBound={onBoundChange} coordinate={coordinate} places={places}/></Grid>
            </Grid>
        </Box>
    )
}

export default Resturant