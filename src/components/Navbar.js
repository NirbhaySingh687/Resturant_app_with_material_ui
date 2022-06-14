import React, {useState} from "react"
import {AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu } from "@mui/material";
import {styled} from "@mui/material";
import {Mail, Notifications, Pets} from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({theme})=> ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme})=> ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox= styled(Box)(({theme})=> ({
    display: "flex",
    alignItems: "center",
    gap: "25px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const UserAvatar = styled(Avatar)({
    height: "30px",
    width: "25px"
})

const UserTypography = styled(Typography)(({ theme })=>({
    display: "block",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return(
        <AppBar position="sticky">
            <StyledToolBar>
                <UserTypography variant="h6">Lama Dev</UserTypography>
                <Pets sx={{display: { xs: "block", sm: "none"}}}/>
                <Search><InputBase placeholder="Search.."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <UserAvatar onClick={e => setOpen(true)} />
                </Icons>
                <UserBox>
                    <UserAvatar onClick={e=>setOpen(true)}/>
                    <Typography variant="span">John</Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </StyledToolBar>
        </AppBar>
    )
}

export default Navbar