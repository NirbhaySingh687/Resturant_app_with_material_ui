import React, {useEffect, useState} from "react";
import { Grid, Box } from "@mui/material"
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./Api";

function Resturant(){
    const [ places, setPlaces ] = useState([])
    const [ coordinate, setCoordinate] = useState([{ lat: -34.397, lng: 150.644 }])
    const [ bound, setBound] = useState(null)
    useEffect(()=>{
        getPlacesData().then((data) => {
            setPlaces(data)
        })
    }, [])
    return(
        <Box>
            <Header />
            <Grid container spacing={3} style={{  padding: "10px", }}>
                <Grid item xs={12} md={4}><List /></Grid>
                <Grid item xs={12} md={8}><Map setCoordinate={setCoordinate} setBound={setBound} coordinate={coordinate} /></Grid>
            </Grid>
        </Box>
    )
}

export default Resturant