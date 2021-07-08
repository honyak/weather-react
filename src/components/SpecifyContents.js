import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: 'white'
    },
  },
}));

const SpecifyContents = (props) => {
    const classes= useStyles();
    return (
        <TextField onKeyDown={(e) => props.handleKeyDown(e)} onChange={props.handleInputChange} 
        className={classes.root} id="outlined-basic" label="Enter zip code." variant="outlined" />
    )
}

export default SpecifyContents;