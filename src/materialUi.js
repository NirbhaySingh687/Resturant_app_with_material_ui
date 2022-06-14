import React from "react"
import Navbar from "./components/Navbar";
import {Box, Stack} from "@mui/material";
import Sidebar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Add from "./components/Add";

/*
import {styled} from "@mui/styles";
const MyBlueButton = styled(Button)({
  backgroundColor: "skyblue",
  color: "#888",
  margin: 5,
  "&:hover": {
    backgroundColor: "pink"
  },
  "&:disabled": {
    backgroundColor: "gray",
    color: "white"
  }
})
<Button>My Button</Button>
<Button variant="contained" color="secondary">Second Button</Button>
<MyBlueButton>Custom Button</MyBlueButton>
*/

function MaterialUi(){
    return(
        <Box>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
                <RightBar />
            </Stack>
            <Add />
        </Box>
    )
}

export default MaterialUi