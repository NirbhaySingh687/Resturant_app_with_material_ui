import React from "react"
import useStyles from "./styles"
import {Card, CardMedia, CardContent, Typography, Box, Chip, CardActions, Button} from "@mui/material";
import {LocationOn, PhoneInTalk} from "@mui/icons-material";

const PlaceDetails = ({ place }) => {

    const classes = useStyles()
    return(
        <Card elevation={6}>
            <CardMedia
                component="img"
                height="350"
                image={place.photo
                    ? place.photo.images.large.url
                    : "https://media-cdn.tripadvisor.com/media/photo-w/0d/53/95/c9/getlstd-property-photo.jpg"}
                alt={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place?.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {
                    place?.awards?.map((award)=>(
                        <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                            <img src={award.images.small} alt={award.display_name}/>
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                        </Box>
                    ))
                }
                {
                    place?.cuisine?.map(( {name} )=>(
                        <Chip key={name} size="small" label={name} className={classes.chip}></Chip>
                    ))
                }
                {
                    place?.address && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                            <LocationOn /> {place.address}
                        </Typography>
                    )
                }
                {
                    place?.phone && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                            <PhoneInTalk /> {place.phone}
                        </Typography>
                    )
                }
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>Trip Advisor</Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>Website</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails