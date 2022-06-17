import React, {useState} from "react"
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, Select } from "@mui/material"
import { CustomSelectEmpty, CustomList, CustomFormControl, Container, MarginBottom, loader } from "./styles"
import PlaceDetails from "../PlaceDetails/PlaceDetails";


const List = ({places}) => {
    const [ type, setType] = useState("restaurants")
    const [ rating, setRating] = useState("")
    return(
        <div style={Container}>
            <Typography variant="h4">Restaurants, Hotels & Attraction around you</Typography>
            <CustomFormControl>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attraction">Attraction</MenuItem>
                </Select>
            </CustomFormControl>
            <CustomFormControl>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </CustomFormControl>
            <Grid container spacing={3} sx={CustomList}>
                {
                    places?.map((place, index) => (
                        <Grid item key={index} xs={12}>
                            <PlaceDetails place={place}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default List