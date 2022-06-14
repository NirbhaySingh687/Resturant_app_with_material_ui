import React from "react"
import { Autocomplete } from "@react-google-maps/api"
import { AppBar,  InputBase, Box } from "@mui/material"
import { CustomToolBar, CustomTitle, CustomDiv} from "./styles"
import SearchIcon from "@mui/icons-material/Search";


const Header = () => {
    return(
        <AppBar position="static">
            <CustomToolBar>
                <CustomTitle variant="h5" component="div" >
                    Travel Advisor
                </CustomTitle>
                <Box display="flex" alignItems="center" gap={2} >
                    <CustomTitle variant="h6" component="div">
                        Explore new Places
                    </CustomTitle>
                    <CustomDiv>
                        <SearchIcon />
                        <InputBase placeholder="Search..."></InputBase>
                    </CustomDiv>
                </Box>
            </CustomToolBar>
        </AppBar>
    )
}

export default Header
