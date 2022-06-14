import { styled, Toolbar, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const CustomToolBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex', justifyContent: "space-between",

}))

export const CustomTitle = styled(Typography)(({ theme }) => ({
    display: 'none',
    cursor: "pointer",
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
}))

export const CustomSearch = styled(SearchIcon)(({ theme }) => ({
    padding: theme.spacing(0, 2), height: '100%', width:"100%", position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
}))

export const CustomDiv = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: "20%",
    borderRadius: 10,
    backgroundColor: "lightblue",
    [theme.breakpoints.down('sm')]: {
        width: "100%",
    },
}))



