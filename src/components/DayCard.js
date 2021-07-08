import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import WbSunny from '@material-ui/icons/WbSunny';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        backgroundColor: 'lightblue'
    },
    typo: {
        margin: "10px",
        justifyItems: 'center'
    }
}));

const DayCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <Paper elevation={2}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.heading}
                    >
                        <Typography className={classes.heading}>{props.displayDate}</Typography>

                    </AccordionSummary>
                </Paper>
                <AccordionDetails>
                    <Typography className={classes.typo} variant="p" component="p">
                        <ArrowUpward /> High: {props.high}
                    </Typography>
                    <Typography className={classes.typo} variant="p" component="p">
                        <ArrowDownward />Low: {props.low}
                    </Typography>
                    <Typography className={classes.typo} variant="p" component="p">
                        <WbSunny />Condition: {props.condition}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default DayCard;

