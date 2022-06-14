import React, {useState} from "react"
import {Tooltip, Fab, Modal, Box, Typography, styled} from "@mui/material";
import { Add as AddIcons } from "@mui/icons-material"
import { makeStyles} from "@mui/styles";

const StyledModel = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const useStyled = makeStyles(({theme}) => ({
    check: {
        backgroundColor: "purple"
    }
}))

const Add = () => {
    const [ open, setOpen ] = useState(false)
    const classes = useStyled()
    return(
        <>
            <Tooltip title="Add" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50%)", md: 30}}} onClick={e => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcons />
                </Fab>
            </Tooltip>
            <StyledModel
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor="white" p={3} borderRadius={2} className={classes.check}>
                    <Typography id="modal-modal-title" variant="h6" color="gray">
                        Text in a modal
                    </Typography>
                </Box>
            </StyledModel>

        </>
    )
}

export default Add
