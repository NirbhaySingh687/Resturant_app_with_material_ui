import {FormControl, styled} from "@mui/material";

export const CustomFormControl  = styled(FormControl)(( { theme } ) => ({
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px"
}))

export const CustomSelectEmpty = styled("div")(({theme}) => ({
    marginTop: theme.spacing(2)
}))

export const loader = {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export const Container = {
    padding: "25px"
}

export const MarginBottom = {
    marginBottom: "30px"
}

export const CustomList = {
    height: "75vh",
    overflow: "auto"
}