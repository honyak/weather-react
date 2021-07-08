import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2)
 
    },
  }));

const Buttons = (props) => {
    const classes = useStyles();
    return (
        <Button className={classes.root} onClick={props.handleFormSubmit} variant="contained">Find</Button>
    )
}

export default Buttons;