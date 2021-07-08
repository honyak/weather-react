import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'25px',
        alignItems: "center",
        justifyContent: "center"
    },
    big: {
        fontSize: "2rem"
    }
}));

const Heading = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position="static">
            <div>
                <span className={classes.big}>Weather Pro</span>
                
            </div>
            {props.children}
        </AppBar>
    )
}

export default Heading;
